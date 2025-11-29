<template>
  <h1
    class="mt-8 max-w-3xl mx-auto text-center text-3xl font-medium lg:text-4xl xl:text-6xl"
  >
    {{ props.title }}
  </h1>
</template>

<script lang="ts" setup>
const props = defineProps({ title: String });
</script>

<style></style>
