<template>
  <div
    v-for="(block, i) in store.article?.content"
    :key="i"
    class="mt-7 mb-8 max-w-3xl w-full mx-auto lg:mb-10 xl:mb-12 2xl:mb-14"
  >
    <!-- Tekst z Markdown -->

    <article
      v-if="block.type === 'text'"
      v-html="renderMarkdown(block.data)"
      class="max-w-4xl prose lg:prose-lg prose-h1:text-yellow-400 prose-p:text-gray-300 prose-li:text-gray-300 prose-h2:text-orange-400 prose-strong:text-gray-300"
    ></article>

    <!-- Cytat -->
     
    <blockquote
      v-else-if="block.type === 'quote'"
      class="border-l-4 pl-4 italic text-gray-400 lg:text-xl lg:py-6"
    >
      {{ block.data }}
    </blockquote>

    <!-- Heading -->

    <div v-if="block.type === 'heading'" :id="block.data">
      <p class="text-orange-400 text-2xl font-bold lg:text-3xl 2xl:text-4xl">
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
</template>

<script lang="ts" setup>
import { marked } from "marked";
const store = useArticleStore();

const highlightQuotes = (text: string) => {
  return text
    .replace(/"([^"]+)"/g, '<span class="italic text-orange-300">"$1"</span>')
    .replace(/„([^”]+)”/g, '<span class="italic text-orange-300">„$1”</span>');
};

// Funkcja konwertująca Markdown na HTML
const renderMarkdown = (text: string) => {
  const highlighted = highlightQuotes(text);
  return marked(highlighted);
};
</script>

<style></style>
