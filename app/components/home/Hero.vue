<template>
  <div class="mt-20 lg:flex items-center justify-center gap-10 xl:gap-20">
    <div
      v-for="(b, index) in base"
      :key="b.name"
      class="relative max-w-[300px] w-full mx-auto mt-10 rounded p-4 bg-[#212121] lg:mx-0"
    >
      <div
        class="absolute mt-2 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-24 z-10 h-8 bg-gradient-to-r from-[#F14D5C] to-[#FDC70C] blur-2xl"
      ></div>
      <div class="relative z-20">
        <p class="font-bold tracking-wider text-lg uppercase">{{ b.name }}</p>
        <p class="text-gray-400 text-sm max-w-[200px] mt-2">{{ b.sub_name }}</p>
        <div class="relative flex items-center justify-center mt-2">
          <IconsJournal class="relative z-20 w-48" v-if="index === 0" />
          <IconsHelp class="relative z-20 w-48" v-if="index === 1" />
          <IconsGlass class="relative z-20 w-48" v-if="index === 2" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const base = ref([
  {
    name: "Dziennik emocji",
    sub_name: "Zapisuj swój nastrój i obserwuj swój progres.",
  },
  {
    name: "Społeczność wsparcia",
    sub_name: "Poznaj ludzi, którzy przechodzą to samo.",
  },
  {
    name: "Artykuły i wskazówki",
    sub_name: "Praktyczne porady od ekspertów i innych.",
  },
]);
</script>

<style></style>
