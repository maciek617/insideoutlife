<template>
  <div>
    <p class="text-2xl font-bold max-w-[240px]">
      Wykonałeś już wszystkie zadania!
    </p>
    <p class="font-thin text-gray-300 mt-2">
      Kliknij przycisk odbierz nagrodę, aby odebrać swoją odznakę!
    </p>

    <div
      class="mt-10 flex flex-col items-start lg:items-center lg:flex-row gap-10"
    >
      <BadgesSleep />
      <button
        @click="$emit('getBadge')"
        class="font-bold shadow bg-[#6FFF00] text-black rounded-full px-5 py-1.5 mt-4 cursor-pointer hover:text-black hover:bg-white transition-colors lg:mt-0"
      >
        Odbierz nagodę!
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineEmits(["getBadge"]);
</script>

<style></style>
