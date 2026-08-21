<template>
  <div class="bg-[#222] rounded shadow max-w-2xl mx-auto p-4 mt-5">
    <p class="text-green-400">Pozytywny czynnik: {{ props.greenScore }}</p>
    <p class="mt-1 text-red-400">Negatywny czynnik: {{ props.redScore }}</p>
    <p class="mt-1 uppercase text-red-400">
      Krytyczne czynniki: {{ props.criticalCount }}
    </p>
    <p class="mt-1">Ogólny wynik: {{ props.totalScore }}</p>
    <p class="mt-1">
      Szansa na zdradę:
      <span class="uppercase font-bold">{{ props.risk }}</span>
    </p>
    <p class="mt-3">Najgroźniejszy czynnik przemawiający za zdradą:</p>
    <p class="text-red-400">{{ props.negativeFactor }}</p>
    <p class="mt-3">Najmocniejszy czynnik przeciwko zdradzie:</p>
    <p class="text-green-400">{{ props.positiveFactor }}</p>

    <p class="mt-10">
      Im większy wynik tym lepiej. Im mniej krytycznych czynników tym lepiej!
    </p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  greenScore: Number,
  redScore: Number,
  criticalCount: Number,
  totalScore: Number,
  risk: String,
  positiveFactor: String,
  negativeFactor: String,
});
</script>

<style></style>
