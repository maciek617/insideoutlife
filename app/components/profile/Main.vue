<template>
  <div class="flex gap-4 mt-10">
    <div
      class="w-20 h-20 rounded-full bg-orange-400 flex items-center justify-center"
    >
      <p class="text-2xl font-bold uppercase">
        {{ props.nick[0] + props.nick.slice(-1) }}
      </p>
    </div>
    <div>
      <p class="text-xl">{{ props.nick }}</p>
      <div>
        <p>Bio / Dodaj Bio (w przyszłości, zmiana avataru w przyszłości)</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  nick: string;
}>();
</script>

<style></style>
