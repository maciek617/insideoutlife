<template>
  <div class="text-white mt-10 lg:mt-14 xl:mt-20">
    <p class="text-xl lg:text-2xl">Spójrz jak Ci idzie! Nie poddawaj się!</p>

    <div>
      <p>Twoje emocje w uśrednieniu</p>
      <p class="text-5xl mt-2">
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
