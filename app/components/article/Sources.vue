<template>
  <div class="mt-32">
    <p class="text-lg font-medium">Bibliografia:</p>
    <div class="italic">
      <p v-for="(source, index) in store.article?.sources" class="mt-2">
        {{ index + 1 }}. {{ source }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const store = useArticleStore();
</script>

<style></style>
