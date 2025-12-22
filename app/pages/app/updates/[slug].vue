<template>
  <div class="container mx-auto min-h-[100vh] text-white pt-10 p-4">
    <NuxtLink to="/app/updates">
      <UseButton text="Powrót" />
    </NuxtLink>

    <div v-if="store.update?.title && !store.loading">
      <p class="mt-3">{{ store.update.title }}</p>
      <p>{{ store.update.date }}</p>
      <div class="mt-5">
        <p class="text-2xl font-bold lg:text-3xl xl:text-4xl 2xl:text-5xl">
          Nowości:
        </p>
        <p v-for="update in store.update?.new_features" class="mt-1 lg:text-lg">
          ◦ {{ update }}
        </p>
      </div>
      <div>
        <p class="mt-5 text-2xl font-bold lg:text-3xl xl:text-4xl 2xl:text-5xl">
          Zmiany i ulepszenia:
        </p>
        <p v-for="update in store.update?.changes" class="mt-1 lg:text-lg">
          ◦ {{ update }}
        </p>
      </div>
      <div>
        <p class="mt-5 text-2xl font-bold lg:text-3xl xl:text-4xl 2xl:text-5xl">
          Naprawa błędów:
        </p>
        <p v-for="update in store.update?.bug_fixes" class="mt-1 lg:text-lg">
          ◦ {{ update }}
        </p>
      </div>
    </div>
    <UseSpinner v-else />
  </div>
</template>

<script lang="ts" setup>
const store = useUpdatesStore();
const route = useRoute();
const slug = ref(route.params.slug?.toString());

onMounted(async () => {
  await store.fetchSingleUpdate(slug.value || "");
});
</script>

<style></style>
