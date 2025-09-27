<template>
  <div class="mt-20">
    <p class="text-2xl">Statystyki</p>
    <div>
      <p>Liczba postów: {{ props.userPostsCount }}</p>
      <p>Liczba komentarzy: {{ props.userCommentsCount }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  userPostsCount: number;
  userCommentsCount: number;
}>();
</script>

<style></style>
