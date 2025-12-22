<template>
  <div class="text-white mt-2">
    <p class="font-bold text-3xl lg:text-4xl xl:text-5xl">
      Jak się dziś czujesz?
    </p>
    <div class="flex gap-4 text-2xl mt-1">
      <p
        v-for="emote in props.emotes"
        :key="emote.count"
        @click="mood = emote.count"
        class="p-2 rounded cursor-pointer mt-2 border hover:border-orange-400"
        :class="
          mood === emote.count
            ? 'border-orange-400 border'
            : 'border-transparent'
        "
      >
        {{ emote.emote }}
      </p>
    </div>

    <div class="mt-10 max-w-xl">
      <div class="flex items-center justify-between">
        <p class="lg:text-lg">Opisz swoje dzisiejsze uczucia</p>

        <IconsTrash
          class="w-5 h-5 fill-[#414141] cursor-pointer hover:fill-orange-400"
          @click="content = ''"
        />
      </div>
      <textarea
        v-model="content"
        placeholder="Pamiętaj możesz napisać wszystko..."
        class="mt-1 w-full p-2 border-b border-gray-500 max-h-96"
      ></textarea>
      <p
        class="text-gray-400 text-right"
        :class="content.length >= 100 ? 'text-red-400' : 'text-gray-400'"
      >
        {{ content.length }}/100
      </p>
      <p v-if="error || content.length >= 100" class="text-red-400">
        Możesz użyć maksymalnie 100 znaków
      </p>
    </div>
    <UseButton text="Zapisz" @click="handleCreateJournalEntry" class="mt-4" />
  </div>
</template>

<script lang="ts" setup>
const { createJournalEntry } = useJournal();
const stats = useStatsStore();
const error = ref(false);
type Emote = {
  emote: string;
  count: number;
};

const props = defineProps<{
  emotes: Emote[];
}>();

const emits = defineEmits(["showToast"]);

const content = ref("");
const mood = ref();

async function handleCreateJournalEntry() {
  error.value = false;
  if (!mood.value) return;
  if (content.value.length > 100) {
    error.value = true;
    return;
  }
  await createJournalEntry(content.value.trimEnd(), mood.value);
  content.value = "";
  await stats.getAllEntries();
  await stats.getAllEntriesWithText();
  emits("showToast");
}
</script>

<style></style>
