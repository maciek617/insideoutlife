<template>
  <div class="text-white mt-10 lg:mt-14 xl:mt-20">
    <p class="text-2xl lg:text-3xl">Spójrz jak Ci idzie! Nie poddawaj się!</p>

    <div>
      <p class="text-gray-400">Twoje emocje w uśrednieniu</p>
      <p class="text-6xl mt-2">
        {{ +props.emote === 0 ? "Dodaj wpis" : props.emote }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  emote: String;
}>();
</script>

<style></style>
