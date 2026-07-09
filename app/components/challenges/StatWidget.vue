<template>
  <div :class="avaibleColors[props.color]" class="text-black rounded-xl">
    <div class="flex justify-between p-2">
      <p class="font-extrabold text-xl">
        {{ props.currentStat }}/{{ props.availableStat }}
      </p>
      <div class="w-10 h-10 bg-red-400 rounded-full"></div>
    </div>
    <p class="w-1/2 px-2 pb-2 font-thin text-lg">{{ props.title }}</p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  color: "yellow" | "blue" | "pink" | "white";
  currentStat: number;
  availableStat: number;
  title: string;
}>();

const avaibleColors = {
  yellow: "bg-[#F2FF00]",
  blue: "bg-[#00FFF7]",
  pink: "bg-[#FF0FD3]",
  white: "bg-[#FFFFFF]",
};
</script>

<style></style>
