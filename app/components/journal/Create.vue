<template>
  <div class="text-white">
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
      <p class="lg:text-lg">Możesz opisać swoje uczucia na dzisiejszy dzień</p>
      <textarea
        v-model="content"
        placeholder="Pamiętaj możesz napisać wszystko..."
        class="w-full p-2 border-b border-gray-500"
      ></textarea>
    </div>
    <UseButton text="Zapisz" @click="handleCreateJournalEntry" class="mt-4" />
  </div>
</template>

<script lang="ts" setup>
const { createJournalEntry } = useJournal();

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
  if (!mood.value) return;
  if (content.value.length > 100) return;
  await createJournalEntry(content.value.trimEnd(), mood.value);
  content.value = "";
  emits("showToast");
}
</script>

<style></style>
