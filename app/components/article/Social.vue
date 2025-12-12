<template>
  <div class="-mt-5" v-if="articleLikes !== null">
    <div
      class="flex gap-2 flex-wrap items-center"
      :class="isNightTime ? 'blue-filter' : ''"
    >
      <div
        class="bg-[#222] w-fit p-2 cursor-pointer group rounded"
        @click="handleArticleLike()"
      >
        <IconsLike
          class="w-4.5 h-4.5 transition-colors group-hover:fill-orange-400"
          :class="articleLiked ? 'fill-orange-400' : 'fill-white'"
        />
      </div>
      <p>{{ articleLikes }}</p>
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
        @click="handleChangeNightTime()"
      >
        <IconsMoon
          class="w-4.5 h-4.5 transition-colors group-hover:fill-orange-400"
          :class="isNightTime ? 'fill-orange-400' : 'fill-white'"
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
      v-if="errorToast"
      :title="'Coś poszło nie tak...'"
      :desc="'Musisz być zalogowany by ocenić ten artykuł'"
      :type="'error'"
      @handle-close-toast="closeToast"
    />
  </div>
</template>

<script lang="ts" setup>
import { generatePdf } from "~/helpers/generateArticlePdf";
import { useArticleLike } from "#imports";
const {
  toggleArticleLike,
  countCurrentArticleLikes,
  checkIfArticlesWasLiked,
  user,
} = useArticleLike();

const url = useRequestURL();
const success = ref(false);
const articleLikes = ref<null | number>(null);
const articleLiked = ref<boolean>();

const props = defineProps({
  content: Array<any>,
  title: String,
  id: String,
});

const isNightTime = ref(false);
const emits = defineEmits(["night-time"]);

const handleChangeNightTime = () => {
  isNightTime.value = !isNightTime.value;
  emits("night-time", isNightTime.value);
};

const copyLink = async () => {
  success.value = false;
  try {
    await navigator.clipboard.writeText(url.href);
    success.value = true;
  } catch (err) {
    console.error("Błąd kopiowania:", err);
  }
};

const blocks = ref(props.content);

const downloadPdf = () => generatePdf(blocks.value, props.title);

const errorToast = ref(false);
const handleArticleLike = async () => {
  if (!user.value) {
    errorToast.value = true;
    return;
  }
  errorToast.value = false;
  articleLiked.value = await toggleArticleLike(props.id || "");
  articleLikes.value !== null
    ? (articleLikes.value += articleLiked.value ? 1 : -1)
    : null;
};

const closeToast = () => {
  setTimeout(() => {
    errorToast.value = false;
  }, 500);
};

onMounted(async () => {
  if (user.value) {
    const { existing } = await checkIfArticlesWasLiked(props.id || "");
    articleLiked.value = existing ? true : false;
  }
  articleLikes.value = await countCurrentArticleLikes(props.id || "");
});
</script>

<style>
.no-filter {
  filter: none;
}
</style>
