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

    <div
      v-if="allArticles.length"
      class="flex gap-8 flex-wrap mt-10 justify-center"
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
    <use-spinner v-else class="mx-auto block mt-10" />
  </div>
</template>

<script lang="ts" setup>
const user = useSupabaseUser();

interface Content {
  data: string;
  type: string;
  alt?: string;
  src?: string;
}
interface Articles {
  title: string;
  slug: string;
  content: Content[];
}

const supabase = useSupabaseClient();
const allArticles = ref<Articles[]>([]);

onMounted(getAllArticles);

async function getAllArticles() {
  const { data, error } = await supabase
    .from("articles")
    .select("title, slug, content")
    .order("created_at", { ascending: false });

  if (data && !error) {
    allArticles.value = data;
  }
}
</script>

<style></style>
