<template>
  <div class="min-h-[100vh] p-4 pt-20 lg:flex">
    <UseNav class="flex-1" />

    <div class="flex-1 lg:ml-24 xl:ml-52" v-if="!loading">
      <UseTooltip
        text="Wybierz emotkę, która Cię dziś opisuje, dodaj opcjonalnie opis i na końcu kliknij zapisz, od teraz codziennie możesz śledzić twój mood."
      />
      <JournalCreate
        v-show="!entry"
        :emotes="emotes"
        @show-toast="showToast = true"
      />

      <div v-if="showToast">
        <UseToast
          title="Udało się!"
          desc="Dodałeś wpis do swojego dziennika!"
          type="success"
        />
      </div>

      <div v-if="entry">
        <IconsDone />
        <p class="text-center text-white text-xl font-thin max-w-lg mx-auto lg:text-2xl xl:text-3xl">
          Gratulacje! Dziś już zapisałeś swoje uczucia. Wróć koniecznie jutro!
        </p>
      </div>

      <JournalStats :emote="currentMood" />
      <JournalHistory :items="allEmotes" :emotes="emotes" />
      <!-- TODO: Wykres pokazujący zestawienie emocji w formie lini -->
    </div>
    <UseSpinner v-else class="mx-auto block" />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: "auth",
});
const {
  getAllEmotes,
  checkIfJournalIsCreatedForToday,
  allEmotes,
  entry,
  loading,
} = useJournal();

const emotes = ref([
  { emote: "😞", count: 2 },
  { emote: "😕", count: 4 },
  { emote: "😐", count: 6 },
  { emote: "🙂", count: 8 },
  { emote: "😄", count: 10 },
]);

const allMoods = ref<any>([]);
const currentMood = ref();
const showToast = ref(false);

function calcMood(arr: any) {
  if (arr.length === 0) return 0; // zabezpieczenie przed dzieleniem przez 0
  const sum = arr.reduce((acc: any, val: any) => acc + val, 0);
  const average = Math.floor(sum / arr.length);

  const averageEven = average % 2 === 0 ? average : average + 1;

  const emote = emotes.value.find((e) => e.count === averageEven)?.emote;
  return emote;
}

onMounted(async () => {
  await checkIfJournalIsCreatedForToday();
  await getAllEmotes();

  // Wszystkie moody z dni
  allMoods.value = allEmotes.value.map((item: any) => item.mood);
  // Średnia z wszystkich dni
  currentMood.value = calcMood(allMoods.value);
});

watchEffect(() => {
  if (allEmotes.value) {
    // Wszystkie moody z dni
    allMoods.value = allEmotes.value.map((item: any) => item.mood);
    // Średnia z wszystkich dni
    currentMood.value = calcMood(allMoods.value);
  }
});
</script>

<style></style>
