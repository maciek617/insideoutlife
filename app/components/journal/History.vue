<template>
  <div class="text-white mt-20" v-if="props.items.length > 0">
    <p class="text-xl lg:text-2xl">
      Oto twoja historia <span class="font-bold">30</span> ostatnich wpisów
    </p>

    <div class="flex flex-wrap gap-5 mt-4 justify-center md:justify-start">
      <JournalMood
        v-for="mood in props.items"
        :key="mood.id"
        :date="mood.created_at"
        :content="mood.text"
        :emote="mood.mood"
        :emotes="props.emotes"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
type Emote = {
  emote: string;
  count: number;
};

const props = defineProps<{
  items: {
    created_at: string;
    id: string;
    mood: number;
    text?: string;
    user_id: string;
  }[];
  emotes: Emote[];
}>();
</script>

<style></style>
