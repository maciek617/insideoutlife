<template>
  <div class="mt-10 lg:mt-14 xl:mt-20">
    <div class="bg-[#f9f871] rounded shadow-xl p-4 max-w-xl">
      <p class="text-2xl font-bold">Spójrz jak Ci idzie! Nie poddawaj się!</p>

      <div>
        <p class="text-gray-700">Twoje emocje w uśrednieniu</p>
        <p class="text-6xl mt-2 drop-shadow-xl">
          {{ +props.emote === 0 ? "Dodaj wpis" : props.emote }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  emote: String;
}>();
</script>

<style></style>
