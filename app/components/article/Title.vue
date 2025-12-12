<template>
  <div class="max-w-xl xl:max-w-2xl">
    <h1 class="mt-8 text-3xl font-medium lg:text-4xl xl:text-5xl">
      {{ props.title }}
    </h1>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({ title: String });
</script>

<style></style>
