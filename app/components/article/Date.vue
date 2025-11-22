<template>
  <div class="my-10">
    <p>Autor: <span class="italic">Admin</span></p>
    <p>{{ formattedDate }}</p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({ date: String });
// Formatowanie daty
const formattedDate = computed(() =>
  props.date ? new Date(props.date).toLocaleDateString() : ""
);
</script>

<style></style>
