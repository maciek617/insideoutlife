<template>
  <div
    class="article text-white pt-10 p-4 font-sans max-w-3xl mx-auto min-h-[100vh] relative"
  >
    <div v-if="article">
      <NuxtLink to="/articles">
        <UseButton text="Powrót" />
      </NuxtLink>
      <ArticleTitle :title="article.title" />
      <ArticleContents :headings="headings" />
      <ArticleDate :date="article.created_at" />
      <ArticleContent :content="article.content" />
      <ArticleSuggestion :id="article.id" />
      <UseInvite />
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

    // countWords(article.value?.content);
  }
};

onMounted(fetchArticle);
</script>

<style scoped></style>
