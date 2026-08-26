<template>
  <div class="bg-[#222] rounded shadow max-w-2xl mx-auto p-4 mt-5">
    <div class="flex flex-col items-center lg:flex-row lg:justify-around">
      <div
        class="bg-green-500 w-40 h-32 rounded shadow flex items-center justify-center flex-col"
      >
        <p class="text-5xl font-bold">{{ props.greenScore }}</p>
        <p class="text-sm">Pozytywny czynnik</p>
      </div>
      <div
        class="bg-red-400 w-40 h-32 rounded shadow flex items-center justify-center flex-col mt-5 lg:mt-0"
      >
        <p class="text-5xl font-bold">{{ props.redScore }}</p>
        <p class="text-sm">Negatywny czynnik</p>
      </div>
      <div
        class="bg-red-500 w-40 h-32 rounded shadow flex items-center justify-center flex-col mt-5 lg:mt-0"
      >
        <p class="text-5xl font-bold">{{ props.criticalCount }}</p>
        <p class="text-sm">Krytyczne czynniki</p>
      </div>
    </div>
    <p class="mt-1">Ogólny wynik: {{ props.totalScore }}</p>
    <p class="mt-5">
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
