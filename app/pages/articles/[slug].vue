<template>
  <div
    class="article text-white pt-10 p-4 font-sans max-w-3xl mx-auto min-h-[100vh]"
  >
    <div v-if="article">
      <NuxtLink to="/articles">
        <UseButton text="Powrót" />
      </NuxtLink>
      <h1
        class="mt-8 max-w-3xl mx-auto text-center text-3xl lg:text-4xl xl:text-6xl"
      >
        {{ article.title }}
      </h1>
      <div class="my-10">
        <p>Autor: <span class="italic">Admin</span></p>
        <p>{{ formattedDate }}</p>
      </div>

      <div
        v-for="(block, i) in article.content"
        :key="i"
        class="mb-8 max-w-3xl w-full mx-auto lg:mb-10 xl:mb-12 2xl:mb-14"
      >
        <!-- Tekst z Markdown -->
        <article
          v-if="block.type === 'text'"
          v-html="renderMarkdown(block.data)"
          class="max-w-4xl prose lg:prose-lg prose-h1:text-yellow-400 prose-p:text-gray-300 prose-li:text-gray-300 prose-h2:text-orange-400"
        ></article>

        <!-- Cytat -->
        <blockquote
          v-else-if="block.type === 'quote'"
          class="border-l-4 pl-4 italic text-gray-400 lg:text-xl lg:py-6"
        >
          {{ block.data }}
        </blockquote>

        <!-- Heading -->
        <div v-if="block.type === 'heading'">
          <p
            class="text-orange-400 text-2xl font-bold lg:text-3xl 2xl:text-4xl"
          >
            {{ block.data }}
          </p>
        </div>
        <!-- Lista punktowana (jeśli w osobnym bloku) -->
        <ul v-else-if="block.type === 'list'" class="list-disc pl-6">
          <li v-for="(item, j) in block.data" :key="j" class="list-none my-4">
            👉 {{ item }}
          </li>
        </ul>

        <!-- Obraz -->

        <NuxtImg
          v-else-if="block.type === 'image'"
          :src="block.src"
          :alt="block.alt"
          class="rounded w-full shadow-md object-cover max-h-96"
        />
      </div>

      <div
        class="mt-10 flex flex-col-reverse items-center lg:flex-row-reverse lg:justify-between lg:items-start lg:mt-20 xl:mt-28"
      >
        <IconsWelcome />
        <div class="lg:flex flex-col justify-start items-start">
          <p
            class="text-center text-xl lg:text-2xl lg:pt-4 xl:text-4xl max-w-md lg:text-left"
          >
            Jeśli jeszcze nie dołączyłeś do InsideOutLife!
          </p>
          <NuxtLink to="/login">
            <UseButton
              text="Dołącz teraz!"
              class="mx-auto block my-2 lg:mx-0 lg:mxr-auto lg:mt-4"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
    <use-spinner v-else />
    <HomeScrollUp/>
  </div>
</template>

<script setup>
import { marked } from "marked";
const supabase = useSupabaseClient();
const route = useRoute();
const router = useRouter();
const slug = route.params.slug;
const article = ref(null);

const fetchArticle = async () => {
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("slug", slug)
    .single();
  if (error) {
    console.error(error);
    router.push("/404");
  } else article.value = data;
};

onMounted(fetchArticle);

// Funkcja konwertująca Markdown na HTML
const renderMarkdown = (text) => marked(text);

// Formatowanie daty
const formattedDate = computed(() =>
  article.value ? new Date(article.value.created_at).toLocaleDateString() : ""
);
</script>

<style scoped></style>
