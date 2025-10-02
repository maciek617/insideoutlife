<template>
  <div class="min-h-[100vh] p-4 pt-20 lg:flex">
    <UseNav class="flex-1" />

    <div class="flex-1 text-white lg:ml-24 xl:ml-52">
      <h1 class="text-2xl lg:text-3xl xl:text-4xl">
        Cześć, mam nadzieję, że jest trochę lepiej!
      </h1>

      <div
        class="mt-10 flex flex-wrap gap-5 justify-center lg:justify-start"
        v-if="latestArticle"
      >
        <DashboardWidget
          v-if="!entry"
          title="📝 Dziennik Emocji"
          text="Dzisiaj nie dodałeś wpisu emocji ☹️"
          link="/app/journal"
          :date="new Date().toLocaleDateString()"
          :button="true"
          class="flex-1"
        />

        <DashboardWidget
          title="Psycholog"
          text="Jeśli masz wiedzę psychologiczną i chcesz pomóc osobom, które tego potrzebują napisz na: test@google.com"
          link="/"
          :button="false"
          class="flex-1"
        />
        <DashboardWidget
          title="👋🏻 Najnowszy artykuł"
          :text="latestArticle?.title"
          :link="'/articles/' + latestArticle?.slug"
          :button="true"
          :btn-text="'Przejdź'"
          class="flex-1"
        />
        <DashboardWidget
          title="👋🏻 Update"
          text="Sprawdź co się zmieniło i zacznij korzystać z nowych funkcji!"
          link="/app/updates"
          :button="true"
          class="flex-1"
          btn-text="Przejdź"
        />
      </div>
      <UseSpinner v-else />
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: "auth",
});

const supabase = useSupabaseClient();
const latestArticle = ref();
const { entry, checkIfJournalIsCreatedForToday } = useJournal();

onMounted(async () => {
  await checkIfJournalIsCreatedForToday();
  await getLatestArticle();
});

async function getLatestArticle() {
  const { data, error } = await supabase
    .from("articles")
    .select("title, slug")
    .order("created_at", { ascending: false }) // najnowszy pierwszy
    .limit(1) // tylko jeden rekord
    .single(); // od razu pobiera obiekt zamiast tablicy;

  if (data && !error) {
    latestArticle.value = data;
  }
}
</script>

<style></style>
