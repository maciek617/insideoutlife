<script setup lang="ts">
import SosButton from "~/components/use/SosButton.vue";
</script>

<template>
  <div class="bg">
    <div class="container mx-auto">
      <slot />
    </div>

    <SosButton class="fixed bottom-6 left-6 z-40" />
    <UseFooter />
  </div>
</template>

<style>
.bg {
  background-image: linear-gradient(to right, #1c1c1c 0%, black 100%);
}
</style>
