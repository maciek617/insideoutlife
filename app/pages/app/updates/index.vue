<template>
  <div class="container mx-auto min-h-[100vh] text-white">
    <h1 class="text-center pt-20">
      Tutaj będą wzmianki o nowych aktualizacjach
    </h1>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: "auth",
});
</script>

<style></style>
