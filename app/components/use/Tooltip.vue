<template>
  <div
    class="text-white relative bg-[#212121] w-8 h-8 rounded-full cursor-help border flex-col"
    @mouseover="showTooltip = true"
    @mouseleave="showTooltip = false"
  >
    <div class="flex items-center justify-center h-8 w-8">
      <p class="font-bold">?</p>
    </div>

    <div
      v-if="showTooltip"
      class="bg-[#212121] w-44 p-2 text-sm rounded shadow-xl"
    >
      <p>
        {{ props.text }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const showTooltip = ref(false);

const props = defineProps<{
  text: string;
}>();
</script>

<style></style>
