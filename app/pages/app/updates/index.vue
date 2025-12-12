<template>
  <div class="container mx-auto min-h-[100vh] text-white pt-10 p-4">
    <NuxtLink to="/app/dashboard">
      <UseButton text="Powrót" />
    </NuxtLink>
    <h1 class="mt-10 text-2xl font-bold lg:text-3xl xl:text-4xl">
      Lista aktualizacji
    </h1>
    <div class="flex gap-5 flex-wrap mt-5">
      <div
        v-for="update in updates"
        :key="update.title"
        class="bg-[#111] max-w-xs w-full p-4 rounded shadow-xl"
      >
        <p class="text-2xl font-bold">{{ update.title }}</p>
        <p>{{ update.date }}</p>
        <NuxtLink :to="'./updates/' + update.title.replaceAll(' ', '-')"
          ><UseButton text="Szczegóły" class="mt-5"
        /></NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: "auth",
});

import { type Update } from "~/interfaces/Update";
const supabase = useSupabaseClient();
const updates = ref<Array<Update>>();

const fetchAllUpdates = async () => {
  const { data, error } = await supabase
    .from("updates")
    .select()
    .order("created_at", { ascending: false });

  if (data && !error) {
    updates.value = data;
  }
};
onMounted(fetchAllUpdates);
</script>

<style></style>
