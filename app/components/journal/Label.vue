<template>
  <div
    class="max-w-xs rounded p-4"
    :class="
      type === 'green'
        ? 'bg-[#d3fbd8]'
        : type === 'pink'
        ? 'bg-[#ec87e4]'
        : type === 'blue'
        ? 'bg-[#d9daff]'
        : 'bg-[#f9f871]'
    "
  >
    <div class="flex gap-4">
      <IconsSignal v-if="props.type === 'green'" class="w-10 h-10" />
      <IconsMsg v-else-if="props.type === 'pink'" class="w-10 h-10" />
      <IconsEmotion v-else-if="props.type === 'blue'" class="w-10 h-10" />
      <IconsOrder v-else class="w-10 h-10" />
      <div>
        <p class="font-light">{{ props.text }}</p>
        <p
          class="font-bold mt-2"
          :class="type === 'yellow' ? 'text-2xl' : 'text-4xl'"
        >
          {{
            type !== "yellow" && type !== "blue"
              ? "+" + props.count
              : "" + props.count
          }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  type: "green" | "pink" | "yellow" | "blue";
  text: string;
  count: number | string | null | undefined;
}>();
</script>

<style></style>
