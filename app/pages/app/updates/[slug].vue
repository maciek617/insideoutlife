<template>
  <div class="container mx-auto min-h-[100vh] text-white pt-10 p-4">
    <NuxtLink to="/app/updates">
      <UseButton text="Powrót" />
    </NuxtLink>

    <div v-if="updates?.title">
      <p class="mt-3">{{ updates.title }}</p>
      <p>{{ updates.date }}</p>
      <div class="mt-5">
        <p class="text-2xl font-bold lg:text-3xl xl:text-4xl 2xl:text-5xl">
          Nowości:
        </p>
        <p v-for="update in updates?.new_features" class="mt-1 lg:text-lg">
          ◦ {{ update }}
        </p>
      </div>
      <div>
        <p class="mt-5 text-2xl font-bold lg:text-3xl xl:text-4xl 2xl:text-5xl">
          Zmiany i ulepszenia:
        </p>
        <p v-for="update in updates?.changes" class="mt-1 lg:text-lg">
          ◦ {{ update }}
        </p>
      </div>
      <div>
        <p class="mt-5 text-2xl font-bold lg:text-3xl xl:text-4xl 2xl:text-5xl">
          Naprawa błędów:
        </p>
        <p v-for="update in updates?.bug_fixes" class="mt-1 lg:text-lg">
          ◦ {{ update }}
        </p>
      </div>
    </div>
    <UseSpinner v-else />
  </div>
</template>

<script lang="ts" setup>
import { type Update } from "~/interfaces/Update";
const supabase = useSupabaseClient();
const route = useRoute();
const titleSlug = ref(route.params.slug);
const updates = ref<Update>();

const changeSlugTitle = () => {
  if (titleSlug) {
    titleSlug.value = titleSlug.value?.toString().replaceAll(/-/g, " ");
  }
};

const fetchUpdate = async () => {
  if (!titleSlug.value) return;
  changeSlugTitle();
  const { data, error } = await supabase
    .from("updates")
    .select()
    .eq("title", titleSlug.value)
    .single();

  if (data && !error) {
    updates.value = data;
  }
};

onMounted(async () => {
  await fetchUpdate();
});
</script>

<style></style>
