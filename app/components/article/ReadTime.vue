<template>
  <div class="flex items-center gap-2">
    <IconsClock class="w-5 h-5 fill-[#99a1af]" />
    <p class="uppercase text-sm text-gray-400 font-bold tracking-wide">{{ props.readTime }} min</p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  readTime: String;
}>();
</script>

<style></style>
