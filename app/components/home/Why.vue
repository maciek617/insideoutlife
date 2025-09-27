<template>
  <div class="mt-20 lg:mt-32 xl:mt-40 2xl:mt-52">
    <HomeHeader text="Dlaczego warto?" />
    <p v-for="b in base" :key="b" class="text-xl my-4">{{ b }}</p>
  </div>
</template>

<script lang="ts" setup>
const base = ref([
  "✅ Anonimowość i bezpieczeństwo",
  "✅ Prawdziwe wsparcie od osób w podobnej sytuacji",
  "✅ Narzędzia, które pomogą Ci odbudować siebie",
]);
</script>

<style></style>
