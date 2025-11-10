<template>
  <div>
    <HomeHeader text="Statystyki dot. zdrowia psychicznego" />
    <p class="text-gray-300 max-w-xl lg:mt-4 lg:text-lg xl:text-xl">
      Poniżej przedstawiono, kilka danych statystycznych związanych ze zdrowiem
      mężczyzn. Warto je przeanalizować oraz poddać się refleksji jak ogromna
      jest skala problemu.
    </p>

    <div
      class="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      <div
        class="svg rounded-xl p-5 shadow-lg max-w-sm w-full mx-auto h-72 flex flex-col justify-between"
        v-for="sentence in sentences"
        :key="sentence.title"
      >
        <p class="text-red-400 text-sm w-52">
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
    <p class="text-sm text-gray-400 mt-4">
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
<style>
.svg {
  background-color: #000000;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23440000' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%235C0000'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
}
</style>
