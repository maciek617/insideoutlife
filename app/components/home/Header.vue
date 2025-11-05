<template>
  <p class="font-bold text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">{{ props.text }}</p>
</template>

<script lang="ts" setup>
const props = defineProps({
  text: String,
});
</script>

<style></style>
