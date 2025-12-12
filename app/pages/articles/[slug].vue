<template>
  <div
    class="article text-white pt-10 p-4 font-sans max-w-3xl mx-auto min-h-[100vh]"
  >
    <div v-if="article" class="">
      <NuxtLink to="/articles">
        <UseButton text="Powrót" />
      </NuxtLink>
      
      <ArticleProgress />

      <div :class="isNightTime ? 'blue-filter' : ''">
        <ArticleTitle :title="article.title" />
        <ArticleContents :headings="headings" />
        <div class="-mb-5 mt-5 flex items-center gap-5 flex-wrap">
          <ArticleReadTime :read-time="article.read_time" />
          <ArticleTags :tags="article.tags" />
        </div>
        <ArticleDate :date="article.created_at" />
      </div>
      <ArticleSocial
        :content="article.content"
        :title="article.title"
        :id="article.id"
        @night-time="(e) => (isNightTime = e)"
      />
      <div :class="isNightTime ? 'blue-filter' : ''">
        <ArticleContent :content="article.content" />
        <ArticleSuggestion :id="article.id" />
        <UseInvite />
      </div>
    </div>

    <use-spinner v-else />
    <HomeScrollUp />
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();
const route = useRoute();
const router = useRouter();
const slug = route.params.slug;
const article = ref(null);
const headings = ref([]);
const isNightTime = ref(false);

const fetchArticle = async () => {
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("slug", slug)
    .single();
  if (error) {
    console.error(error);
    router.push("/404");
  } else {
    article.value = data;

    headings.value = article.value.content
      .filter((item) => item.type === "heading")
      .map((item) => item.data);
  }
};

onMounted(fetchArticle);
</script>

<style>
.blue-filter {
  filter: sepia(40%) hue-rotate(-15deg) brightness(90%);
}
</style>
