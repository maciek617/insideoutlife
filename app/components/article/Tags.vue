<template>
  <div v-if="store.article?.tags" class="flex gap-2 flex-wrap">
    <div
      v-for="(tag, idx) in store.article.tags"
      :key="idx"
      class="bg-[#171717] w-fit p-1.5 rounded shadow text-[9px] uppercase tracking-wider font-bold md:text-[10px]"
    >
      <p class="text-gray-300">{{ tag }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const store = useArticleStore();
</script>

<style></style>
