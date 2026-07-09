<template>
  <div class="container mx-auto p-10 min-h-screen">
    <NuxtLink to="/app/dashboard">
      <UseButton text="Powrót" />
    </NuxtLink>

    <div class="text-white mt-6">
      <h1 class="text-2xl lg:text-3xl 2xl:text-4xl">Dostępne wyzwania🔥</h1>
    </div>

    <div class="mt-10">
      <ChallengesWidget />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
