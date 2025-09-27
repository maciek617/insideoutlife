<template>
  <div class="text-white mt-20">
    <p class="text-xl">Oto twoja historia z ostatnich 30 dni:</p>

    <div
      class="flex flex-wrap gap-5 mt-4 justify-center md:justify-start"
      v-if="props.items.length > 0"
    >
      <JournalMood
        v-for="mood in props.items"
        :key="mood.id"
        :date="mood.created_at"
        :content="mood.text"
        :emote="mood.mood"
        :emotes="props.emotes"
      />
    </div>
    <div v-else>
      <p class="text-2xl">
        Aby śledzić twoje statystyki zacznij dodawać wpisy każdego dnia!
      </p>
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
