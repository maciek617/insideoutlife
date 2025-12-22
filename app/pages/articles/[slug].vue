<template>
  <div
    class="article text-white pt-10 p-4 font-sans max-w-3xl mx-auto min-h-[100vh]"
  >
    <div v-if="store.article && !store.loading">
      <NuxtLink to="/articles">
        <UseButton text="Powrót" />
      </NuxtLink>

      <ArticleProgress />

      <div :class="store.isNightTime ? 'blue-filter' : ''">
        <ArticleTitle />
        <ArticleContents />
        <div class="-mb-5 mt-5 flex items-center gap-5 flex-wrap">
          <ArticleReadTime />
          <ArticleTags />
        </div>
        <ArticleDate />
      </div>
      <ArticleSocial />
      <div :class="store.isNightTime ? 'blue-filter' : ''">
        <ArticleContent />
        <ArticleSuggestion />
        <UseInvite />
      </div>
      <ArticleSummary v-if="store.showSummary" />
    </div>

    <use-spinner v-else />
    <HomeScrollUp />
  </div>
</template>

<script setup>
const store = useArticleStore();
const route = useRoute();
const slug = route.params.slug;

onMounted(async () => {
  store.fetchSingleArticle(slug);
});
</script>

<style>
.blue-filter {
  filter: sepia(40%) hue-rotate(-15deg) brightness(90%);
}
</style>
