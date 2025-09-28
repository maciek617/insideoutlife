<template>
  <div class="container mx-auto min-h-[100vh] text-white p-4">
    <div class="text-center lg:mt-20">
      <h1 class="text-5xl">Potwierdź swój adres e-mail.</h1>
      <p class="mt-20 lg:text-xl">Sprawdź swoją skrzynkę pocztową:</p>
      <p class="font-bold text-orange-400 italic underline text-3xl">
        {{ route.params.email }}
      </p>
    </div>
    <p class="text-center text-gray-400 mt-32">&copy; 2025 InsideOutLife</p>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
</script>

<style></style>
