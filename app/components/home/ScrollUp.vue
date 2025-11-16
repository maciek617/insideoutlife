<template>
  <div v-if="isScrolled" class="fixed bottom-3 right-5 -rotate-90">
    <p
      class="bg-[#f09819] text-xl rounded p-2 cursor-pointer shadow-xl"
      @click="handleScrollTop"
    >
      ➜
    </p>
  </div>
</template>

<script lang="ts" setup>
const isScrolled = ref(false);

const handleShowScrollButton = () => {
  window.pageYOffset > 300
    ? (isScrolled.value = true)
    : (isScrolled.value = false);
};

const handleScrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  window.addEventListener("scroll", handleShowScrollButton);
});

onUnmounted(() => window.removeEventListener("scroll", handleScrollTop));
</script>

<style></style>
