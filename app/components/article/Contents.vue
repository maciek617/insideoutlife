<template>
  <div v-if="props.headings?.length" class="mt-10 bg-[#171717] p-4 rounded-xl">
    <p class="font-bold text-gray-400 tracking-wide uppercase lg:text-lg">
      Spis treści
    </p>
    <p
      v-for="heading in props.headings"
      @click="scrollIntoArea(heading)"
      class="text-orange-400 mt-2 cursor-pointer block w-fit underline"
    >
      {{ heading }}
    </p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  headings: Array<string>,
});

const scrollIntoArea = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
</script>

<style></style>
