<template>
  <div class="text-white min-h-[100vh] container mx-auto px-4 pt-4">
    <NuxtLink to="/">
      <UseButton text="Powrót" />
    </NuxtLink>
    <ToolsHero />
    <ToolsSearch @searching="(e) => filterApps(e)" />

    <div class="flex gap-4 flex-wrap mt-10 justify-center lg:mt-20 xl:mt-28">
      <ToolsCard
        v-for="appInfo in filteredAppInfoBase"
        :key="appInfo.title"
        :title="appInfo.title"
        :desc="appInfo.desc"
        :link="appInfo.link"
        :is-verified="appInfo.isVerfied"
      />

      <p v-if="filteredAppInfoBase.length === 0">Brak wyników.</p>
    </div>

    <div
      class="text-center mt-20 font-thin text-xl max-w-xl mx-auto text-gray-300"
    >
      <IconsBrain class="w-14 h-14 mx-auto" />
      <p>
        Jeśli znasz jakąś aplikację lub stronę internetową wsparcia a nie ma jej
        tutaj, koniecznie się skontaktuj:
        <span class="text-[#f09819]">kontakt@insideoutlife.pl</span>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const appInfoBase = ref([
  {
    title: "Bratbratu.org",
    desc: "Telefon wsparcia, poradniki, statystyki",
    link: "https://bratbratu.org/",
    isVerfied: true,
  },
  {
    title: "Fundacjaipw.org",
    desc: "Telefon zaufania, patronat Ministerstwa Zdrowia",
    link: "https://www.fundacjaipw.org/mezczyzni",
    isVerfied: true,
  },
  {
    title: "Headsupguys.org",
    desc: "Artykuły, walka z depresją, język angielski",
    link: "https://headsupguys.org/",
    isVerfied: true,
  },
  {
    title: "Movember",
    desc: "Zdrowie psychiczne i fizyczne, gov.pl",
    link: "https://www.gov.pl/web/psse-jelenia-gora/movember",
    isVerfied: true,
  },
  {
    title: "Face It",
    desc: "Walka z depresją, artykuły, eventy, język angielski",
    link: "https://www.faceitfoundation.org/",
    isVerfied: true,
  },
]);

const filteredAppInfoBase = ref(appInfoBase.value);

const filterApps = (term: string) => {
  filteredAppInfoBase.value = appInfoBase.value.filter(
    (appInfo) =>
      appInfo.title.toLowerCase().includes(term.toLowerCase()) ||
      appInfo.desc.toLowerCase().includes(term.toLowerCase())
  );
};
</script>

<style></style>
