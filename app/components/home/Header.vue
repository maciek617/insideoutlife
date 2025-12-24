<template>
  <p class="font-bold uppercase tracking-wider text-3xl xl:text-4xl">
    {{ props.text }}
  </p>
</template>

<script lang="ts" setup>
const props = defineProps({
  text: String,
});
</script>

<style></style>
