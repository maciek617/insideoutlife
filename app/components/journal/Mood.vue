<template>
  <div
    class="w-full max-w-[175px] p-2 rounded bg-[#1e1e1e] shadow-xl aspect-square"
  >
    <p class="text-sm">{{ props.date.split("T")[0] }}</p>
    <p class="text-center text-4xl mt-6 mb-2">{{ currentEmote }}</p>
    <p class="italic text-center">
      {{
        props.content
          ? `"${props.content}"`
          : `"W tym dniu nic nie
      napisałeś"`
      }}
    </p>
  </div>
</template>

<script lang="ts" setup>
type Emote = {
  emote: string;
  count: number;
};

const props = defineProps<{
  date: String;
  emote: Number;
  emotes: Emote[];
  content?: String;
}>();

const currentEmote = props.emotes.find((e) => e.count === props.emote)?.emote;
</script>

<style></style>
