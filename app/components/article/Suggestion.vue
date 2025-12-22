<template>
  <div class="mt-44">
    <p class="text-2xl font-medium">Może Cię zainteresuje</p>
    <div class="w-full h-0.5 mt-2 bg-gray-700"></div>

    <div class="gap-4 mt-4 grid grid-cols-1 place-items-center md:grid-cols-2">
      <ArticleSingle
        v-for="article in tempArticles"
        :key="article?.title"
        :title="article.title"
        :desc="article?.content[0]?.data"
        :img="article.content.find((item) => item.type === 'image')?.src"
        :slug="article.slug"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Articles } from "~/interfaces/Article";
const store = useArticleStore();

const tempArticles = ref<Articles[]>(
  store.allArticles.filter((item) => item.id !== store.article?.id).splice(0, 2)
);

onMounted(async () => {
  if (!store.allArticles.length) {
    await store.fetchAllArticles();

    tempArticles.value = store.allArticles
      .filter((item) => item.id !== store.article?.id)
      .splice(0, 2);
  }
});
</script>

<style></style>
