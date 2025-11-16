<template>
  <div class="mt-20 lg:flex items-center justify-center gap-10 xl:gap-20">
    <div
      v-for="b in base"
      :key="b.name"
      class="max-w-sm h-52 flex flex-col justify-center items-center w-full mx-auto mt-10 bg-[#212121] rounded shadow-xl p-4 lg:mx-0"
    >
      <p class="text-4xl">{{ b.icon }}</p>
      <p class="text-2xl text-center mt-2 font-medium">
        {{ b.name }}
      </p>
      <p class="text-center mt-4 text-gray-300">{{ b.sub_name }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const base = ref([
  {
    name: "Dziennik emocji",
    sub_name: "Zapisuj swój nastrój i obserwuj swój progres.",
    icon: "📝",
  },
  {
    name: "Społeczność wsparcia",
    sub_name: "Poznaj ludzi, którzy przechodzą to samo.",
    icon: "🫂",
  },
  {
    name: "Artykuły i wskazówki",
    sub_name: "Praktyczne porady od ekspertów i innych.",
    icon: "📖",
  },
]);
</script>

<style></style>
