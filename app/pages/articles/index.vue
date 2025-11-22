<template>
  <div class="container mx-auto min-h-[100vh] text-white px-4 pt-10 lg:pt-20">
    <div class="flex justify-between mb-4">
      <NuxtLink to="/">
        <UseButton text="Strona główna" />
      </NuxtLink>

      <NuxtLink to="/app/dashboard" v-if="user?.id">
        <UseButton text="Aplikacja" />
      </NuxtLink>
    </div>
    <h1 class="text-center text-3xl lg:text-4xl xl:text-5xl">
      Czytaj. Inspiruj się. Działaj.
    </h1>

    <div v-if="allArticles.length">
      <div
        class="grid grid-cols-1 place-items-center-safe gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10"
      >
        <ArticleSingle
          v-for="article in allArticles"
          :key="article?.title"
          :title="article.title"
          :desc="article?.content[0]?.data"
          :img="article.content.find((item) => item.type === 'image')?.src"
          :slug="article.slug"
        />
      </div>

      <p class="text-center mt-5" v-if="noMoreArticlesMsg">
        Nie ma już więcej artykułów, wróć w przyszłości!
      </p>
      <UseButton
        text="Załaduj więcej"
        class="mx-auto block mt-10"
        @click="loadMoreArticles"
      />
    </div>
    <use-spinner v-else class="mx-auto block mt-10" />
  </div>
</template>

<script lang="ts" setup>
const user = useSupabaseUser();

const { getAllArticles, allArticles, loadMoreArticles, noMoreArticlesMsg } =
  useArticles();

onMounted(async () => {
  await getAllArticles();
});
</script>

<style></style>
