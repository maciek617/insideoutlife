<template>
  <div class="fixed top-0 left-0 w-full min-h-screen z-50 p-4">
    <div
      class="w-full h-full bg-black opacity-70 absolute top-0 left-0 -z-10 off"
    ></div>

    <div
      class="modal p-4 rounded shadow-2xl z-40 bg-[#1e1e1e] max-w-xs w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
    >
      <IconsXmark
        class="w-6 h-6 ml-auto cursor-pointer"
        @click="store.toggleShowSummary"
      />
      <p class="text-sm font-bold lg:text-xl">Streszczenie artykułu</p>
      <p class="mt-2">
        {{ store.article?.summary }}
      </p>
      <UseButton text="Zamknij" class="mt-5" @click="store.toggleShowSummary" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const store = useArticleStore();

const closeModalWhenClickOutside = (e: MouseEvent) => {
  const target = e.target as HTMLElement;

  if (target.classList.contains("off")) {
    store.toggleShowSummary();
  }
};

onMounted(() => window.addEventListener("click", closeModalWhenClickOutside));
onUnmounted(() =>
  window.removeEventListener("click", closeModalWhenClickOutside)
);
</script>

<style></style>
