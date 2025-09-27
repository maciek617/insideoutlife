<template>
  <h1 class="text-2xl lg:text-3xl xl:text-4xl">Witaj, {{ props.nick }}</h1>
</template>

<script lang="ts" setup>
const props = defineProps<{ nick: string }>();
</script>

<style></style>
