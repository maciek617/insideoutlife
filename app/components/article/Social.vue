<template>
  <div class="-mt-5" v-if="store.articleLikes !== null">
    <div
      class="flex gap-2 flex-wrap items-center"
      :class="store.isNightTime ? 'blue-filter' : ''"
    >
      <div
        class="bg-[#222] w-fit p-2 cursor-pointer group rounded"
        @click="store.toggleArticleLike()"
      >
        <IconsLike
          class="w-4.5 h-4.5 transition-colors group-hover:fill-orange-400"
          :class="store.likeArticleExists ? 'fill-orange-400' : 'fill-white'"
        />
      </div>
      <p>{{ store.articleLikes }}</p>
      <div
        class="bg-[#222] w-fit p-2 cursor-pointer group rounded ml-3"
        @click="copyLink"
      >
        <IconsShare
          class="w-4.5 h-4.5 transition-colors fill-white group-hover:fill-orange-400"
        />
      </div>
      <div
        class="bg-[#222] w-fit p-2 cursor-pointer group rounded"
        @click="downloadPdf"
      >
        <IconsPdf
          class="w-4.5 h-4.5 transition-colors fill-white group-hover:fill-orange-400"
        />
      </div>
      <div
        class="bg-[#222] w-fit p-2 cursor-pointer group rounded ml-2"
        @click="store.isNightTime = !store.isNightTime"
      >
        <IconsMoon
          class="w-4.5 h-4.5 transition-colors group-hover:fill-orange-400"
          :class="store.isNightTime ? 'fill-orange-400' : 'fill-white'"
        />
      </div>
    </div>
    <UseToast
      v-if="success"
      :title="'Udało się!'"
      :desc="'Link do artykułu został skopiowany'"
      :type="'success'"
    />
    <UseToast
      v-if="store.errorToast"
      :title="'Coś poszło nie tak...'"
      :desc="'Musisz być zalogowany by ocenić ten artykuł'"
      :type="'error'"
      @handle-close-toast="closeToast"
    />
  </div>
</template>

<script lang="ts" setup>
import { generatePdf } from "~/helpers/generateArticlePdf";
const store = useArticleStore();
const url = useRequestURL();
const success = ref(false);

const copyLink = async () => {
  success.value = false;
  try {
    await navigator.clipboard.writeText(url.href);
    success.value = true;
  } catch (err) {
    console.error("Błąd kopiowania:", err);
  }
};

const blocks = ref(store.article?.content);

const downloadPdf = () => generatePdf(blocks.value, store.article?.title);

const closeToast = () => {
  setTimeout(() => {
    store.errorToast = false;
  }, 500);
};

onMounted(async () => {
  if (store.user) {
    await store.checkIfArticlesWasLiked();
  }
  await store.countCurrentArticleLikes();
});
</script>
