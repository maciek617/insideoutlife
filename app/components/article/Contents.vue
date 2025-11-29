<template>
  <div v-if="props.headings?.length" class="mt-5">
    <p class="text-xl">Spis treści</p>
    <p
      v-for="heading in props.headings"
      @click="scrollIntoArea(heading)"
      class="text-orange-400 mt-1 cursor-pointer block w-fit underline"
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
