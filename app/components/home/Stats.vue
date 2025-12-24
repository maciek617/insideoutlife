<template>
  <div>
    <HomeHeader text="Zdrowie psychiczne" />
    <p class="text-gray-300 max-w-3xl font-thin lg:mt-4 lg:text-lg">
      Poniżej przedstawiono, kilka danych statystycznych związanych ze zdrowiem
      mężczyzn. Warto je przeanalizować oraz poddać się refleksji jak ogromna
      jest skala problemu.
    </p>

    <div
      class="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      <div
        class="bg-[#111111] rounded-xl p-5 shadow-2xl max-w-sm w-full mx-auto h-72 flex flex-col justify-between"
        v-for="sentence in sentences"
        :key="sentence.title"
      >
        <p class="text-red-400 text-md w-68 font-thin">
          {{ sentence.title }}
        </p>
        <p class="text-9xl text-center mt-5 font-medium">
          <span
            v-for="sn in sentence.stats"
            class="hover:font-black transition-all text-red-400"
            :class="sn === '%' ? 'text-5xl' : ''"
            >{{ sn }}</span
          >
        </p>
      </div>
    </div>
    <p class="text-sm font-thin text-gray-400 mt-4">
      *Dane statystyczne z przestrzeni ostatnich 10 lat m. in. międzynarodowe
      oraz krajowe.
    </p>
  </div>
</template>

<script lang="ts" setup>
const sentences = ref([
  {
    title: "Mężczyzn nie szuka pomocy psychologicznej.",
    stats: "87%",
  },
  {
    title: "Popełnianych samobójstw to mężczyźni.",
    stats: "86%",
  },
  {
    title:
      "Zdradzanych mężczyzn. Ryzyko zdrady wzrasta z wiekiem: niższe ryzyko u młodszych osób, wyższe u starszych.",
    stats: "55%",
  },
  {
    title: "Zdradzanych mężczyzn z 1 osobą.",
    stats: "25%",
  },
  {
    title: "Zdradzanych mężczyzn z wieloma osobami.",
    stats: "30%",
  },
  {
    title: "Mężczyzn z silną depresją.",
    stats: "20%",
  },
  {
    title: "Mężczyzn z poczuciem samotności.",
    stats: "61%",
  },
  {
    title: "Mężczyzn z utrudnionym bądź niemożliwym kontaktem z dziećmi.",
    stats: "40%",
  },
]);
</script>
<style></style>
