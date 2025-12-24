<template>
  <div class="mt-4">
    <div
      v-for="(item, index) in faqs"
      :key="index"
      @click="toggleAnswer(index)"
      class="rounded my-2 p-5 cursor-pointer"
      :class="item.expanded ? 'bg-[#212121]' : 'bg-black'"
    >
      <button class="text-md cursor-pointer font-thin md:text-lg xl:text-xl">
        <span class="text-3xl mr-3 w-5 inline-block">{{
          item.expanded ? "-" : "+"
        }}</span>
        {{ item.question }}
      </button>
      <div
        class="mt-2 transition-all h-0"
        :class="item.expanded ? 'h-10 opacity-100' : 'h-0 opacity-0'"
      >
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
    question: "Czy korzystanie z aplikacji jest darmowe?",
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
