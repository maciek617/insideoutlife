<template>
  <div class="mt-20 lg:flex items-center justify-center gap-10 xl:gap-20">
    <div
      v-for="b in base"
      :key="b.name"
      class="max-w-sm w-full mx-auto mt-10 bg-[#212121] rounded shadow-xl p-4 lg:mx-0"
    >
      <p class="text-2xl text-center">
        {{ b.name }}
      </p>
      <p class="text-center mt-4 text-gray-300">{{ b.sub_name }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const base = ref([
  {
    name: "📝 Dziennik emocji",
    sub_name: "Zapisuj swój nastrój i obserwuj swój progres.",
  },
  {
    name: "🫂 Społeczność wsparcia",
    sub_name: "Poznaj ludzi, którzy przechodzą to samo.",
  },
  {
    name: "📖 Artykuły i wskazówki",
    sub_name: "Praktyczne porady od ekspertów i innych.",
  },
]);
</script>

<style></style>
