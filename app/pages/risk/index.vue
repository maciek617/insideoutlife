<template>
  <div class="text-white min-h-[100vh] container mx-auto px-4 pt-4">
   <RiskIntro/>

    <div class="flex justify-between flex-wrap">
      <div class="mt-16">
        <p class="text-2xl uppercase font-bold mb-5">Zielone flagi</p>
        <div v-for="gFlag in greenFlags"">
          <div
            @click="addFlagToBase(gFlag)"
            class="flex gap-2 items-center mt-2 cursor-pointer hover:text-green-400"
            :class="gFlag.active ? 'text-green-400' : ''"
          >
            <div
              class="w-3 h-3 rounded-full"
              :class="gFlag.active ? 'bg-green-400' : 'bg-white'"
            ></div>
            <p>{{ gFlag.name }}</p>
          </div>
        </div>
      </div>

      <div class="mt-16">
         <p class="text-2xl uppercase font-bold mb-5">Czerwone flagi</p>
        <div v-for="rFlag in redFlags">
          <div
            @click="addFlagToBase(rFlag)"
            :class="rFlag.active ? 'text-red-400' : ''"
            class="flex gap-2 items-center mt-2 cursor-pointer hover:text-red-400"
          >
            <div
              class="w-3 h-3 rounded-full"
              :class="rFlag.active ? 'bg-red-400' : 'bg-white'"
            ></div>
            <p>{{ rFlag.name }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-10 text-center lg:mt-20 2xl:mt-32">
      <h2 class="text-2xl uppercase font-bold mb-4 lg:text-3xl 2xl:text-4xl">Sprawdź wynik</h2>
      <UseButton text="Oszacuj szansę" @click="calculateScore"/>
      <p class="mt-2 text-red-400" v-if="showError">Najpierw zaznacz flagi!</p>
      <RiskOutput v-if="startCalc" :green-score="greenScore" :red-score="redScore" :total-score="totalScore" :risk="risk" :positive-factor="positiveFactor" :negative-factor="negativeFactor" :critical-count="criticalCount"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type RelationshipFlag } from "~/types/flag";
const flagData = ref<Array<RelationshipFlag>>([]);
const greenScore = ref(0);
const redScore = ref(0);
const totalScore = ref(0);
const risk = ref("");
const criticalCount = ref(0);
const startCalc = ref(false);
const positiveFactor = ref("");
const negativeFactor = ref("");
const showError = ref(false);

const resetCalc = () => {
  greenScore.value = 0;
  redScore.value = 0;
  totalScore.value = 0
  risk.value = "";
  criticalCount.value = 0
}

const calculateScore = () => {
  startCalc.value = true;
  resetCalc();

  if(!flagData.value.length) {
    showError.value = true;
    startCalc.value = false;
    return
  }
  showError.value = false;
  flagData.value.forEach((flag) => {
    // It means that this is green flag
    if (flag.weight > 0) {
      greenScore.value += flag.weight;
    }

    if (flag.weight < 0) {
      redScore.value += flag.weight;

      if (flag.critical) criticalCount.value++;
    }
  });

  totalScore.value = greenScore.value + redScore.value;

  // most positive factor
  positiveFactor.value = flagData.value.reduce((max, flag) => {
    return flag.weight > max.weight ? flag : max;
  }).name;


  //most negative factor
  negativeFactor.value = flagData.value.reduce((min, flag) => {
  return flag.weight < min.weight ? flag : min;
}).name;

  showOutputScoreMessage(totalScore.value)
};

const showOutputScoreMessage = (score: number) => {
  risk.value = "";
  if (score >= 20) {
    risk.value = "Praktycznie zerowa / niemożliwa";
  } else if (score >= 10) {
    risk.value = "Mała / umiarkowana";
  } else if (score >= 0) {
    risk.value = "Umiarkowanie duża";
  } else if (score >= -10) {
    risk.value = "Duża";
  } else {
    risk.value = "Ekstremalnie duża";
  }

  if (criticalCount.value >= 3) {
    risk.value = "Ekstremalnie duża";
  } else if (criticalCount.value === 2 && score <= 0) {
    risk.value = "Duża";
  } else if (criticalCount.value === 1 && score <= 10) {
    risk.value = "Umiarkowanie duża";
  }
};

const addFlagToBase = (flag: RelationshipFlag) => {
  flag.active = !flag.active;

  if (!flagData.value.includes(flag)) {
    flagData.value.push(flag);
  } else {
    const index = flagData.value.indexOf(flag);
    flagData.value.splice(index, 1);
  }

};
</script>

<style></style>
