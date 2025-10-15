<template>
  <div class="min-h-[100vh]">
    <div class="pt-20 lg:flex">
      <UseNav class="flex-1" />

      <div class="flex-1" v-if="userData">
        <PostCreator />
        <PostList />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: "auth",
});
const { userData, getUser } = useUser();

onMounted(async () => await getUser());
</script>

<style></style>
