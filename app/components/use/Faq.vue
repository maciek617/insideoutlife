<template>
  <div class="mt-4">
    <div
      v-for="(item, index) in faqs"
      :key="index"
      @click="toggleAnswer(index)"
      class="rounded my-2 bg-black p-5 cursor-pointer"
    >
      <button class="text-md cursor-pointer md:text-lg xl:text-xl">
        ⬇️ {{ item.question }}
      </button>
      <div v-show="item.expanded" class="mt-2 italic">
        {{ item.answer }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const faqs = ref([
  {
    question: "Czy muszę podawać prawdziwe dane?",
    answer: "Nie, wystarczy pseudonim",
    expanded: false,
  },
  {
    question: "Czy inni zobaczą mój dziennik emocji?",
    answer: "Nie, dziennik jest prywatny",
    expanded: false,
  },
  {
    question: "Czy korzystanie jest darmowe?",
    answer: "Tak, korzystanie jest w pełni darmowe",
    expanded: false,
  },
]);

const toggleAnswer = (index: number) => {
  if (!faqs.value[index]) return;
  faqs.value[index].expanded = !faqs.value[index].expanded;
};
</script>

<style></style>
