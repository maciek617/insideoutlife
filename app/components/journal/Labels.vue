<template>
  <div class="mt-10">
    <p class="text-xl text-white lg:text-2xl">Statystyki ogólne</p>
    <div class="flex flex-wrap gap-4 mt-4">
      <JournalLabel
        :text="'Ilość wpisów ogółem'"
        :count="stats.countJournalTotalEntries"
        :type="'green'"
        class="w-full sm:w-1/2"
      />

      <JournalLabel
        :text="'Ilość wpisów z tekstem ogółem'"
        :count="stats.countJournalTotalEntriesWithText"
        :type="'pink'"
        class="w-full sm:w-1/2"
      />
      <JournalLabel
        :text="'Twój pierwszy wpis'"
        :count="stats.firstEntryDate"
        :type="'yellow'"
        class="w-full sm:w-1/2"
      />
      <!-- <JournalLabel
        :text="'Najczęstsza emocja'"
        :count="emote"
        :type="'blue'"
        class="w-full sm:w-1/2"
      /> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
const stats = useStatsStore();
const emotes = ref([
  { emote: "😄", count: 10 },
  { emote: "🙂", count: 8 },
  { emote: "😐", count: 6 },
  { emote: "😕", count: 4 },
  { emote: "😞", count: 2 },
]);

const emote = computed(
  () => emotes.value.find((e) => e.count === stats.mostFrequentMood)?.emote
);
</script>

<style></style>
