<template>
  <div class="min-h-[100vh] p-4 pt-20 lg:flex">
    <!-- <NuxtLink to="/app/dashboard">
      <UseButton text="Powrót" />
    </NuxtLink> -->
    <UseNav class="flex-1" />

    <div class="flex-1 xl:ml-32 2xl:ml-44">
      <div class="text-white mt-6">
        <h1 class="text-2xl lg:text-3xl 2xl:text-4xl">Dostępne wyzwania🔥</h1>
      </div>

      <div class="mt-10">
        <ChallengesWidget />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: "auth",
});
</script>

<style></style>
