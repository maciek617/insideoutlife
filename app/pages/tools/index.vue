<template>
  <div class="text-white min-h-[100vh] container mx-auto px-4 pt-4">
    <NuxtLink to="/">
      <UseButton text="Powrót" />
    </NuxtLink>
    <div>
      <ToolsSwitch @switch="(isActive) => (isSwitched = isActive)" />
      <ToolsHero
        :is-app="isSwitched"
        :counter="isSwitched ? appInfoBase.length : bookInfoBase.length"
      />
      <ToolsSearch @searching="(e) => filterApps(e)" />
      <div
        class="flex gap-4 flex-wrap mt-10 justify-center lg:mt-20 xl:mt-28"
        v-if="filteredAppInfoBase"
      >
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
    </div>

    <div
      class="text-center mt-20 font-thin text-xl max-w-xl mx-auto text-gray-300"
    >
      <IconsBrain class="w-14 h-14 mx-auto" />
      <p>
        Jeśli znasz jakąś aplikację, stronę internetową lub książkę wsparcia a
        nie ma jej tutaj, koniecznie się skontaktuj:
        <a href="mailto:kontakt@insideoutlife.pl" class="text-[#f09819]"
          >kontakt@insideoutlife.pl</a
        >
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: "Aplikacje i książki, gdzie znajdziesz pomoc",
  description:
    "Znajdź aplikacje, strony internetowe, książki wsparcia i materiały stworzone z myślą o zdrowiu psychicznym oraz problemach, z którymi możesz mierzyć się na co dzień.",

  ogTitle: "Aplikacje i miejsca, gdzie znajdziesz pomoc | InsideOutLife",
  ogDescription:
    "Zebraliśmy aplikacje, telefony wsparcia, poradniki i sprawdzone źródła pomocy dla mężczyzn.",
  ogType: "website",
  ogUrl: "https://insideoutlife.pl/tools",
  ogSiteName: "InsideOutLife",
  ogLocale: "pl_PL",
});

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

const bookInfoBase = ref([
  {
    title: "(Nie)miły facet",
    desc: "O granicach, potrzebie aprobaty, własnych potrzebach i odzyskiwaniu siebie: Robert A. Glover",
    link: "https://www.empik.com/nie-mily-facet-meskie-spojrzenie-na-milosc-seks-i-zwiazki-glover-robert-a,p1512844483,ksiazka-p",
    isVerfied: true,
  },
  {
    title: "Samowspółczucie",
    desc: "Praca z poczuciem winy, wstydem, krytykowaniem siebie i trudnymi emocjami: Kristin Neff, Christopher Germer",
    link: "https://www.empik.com/samowspolczucie-zaakceptuj-siebie-i-zbuduj-wewnetrzna-sile-christopher-germer-neff-kristin,p1341555530,ksiazka-p?offerId=226772193",
    isVerfied: true,
  },
  {
    title: "Umysł ponad nastrojem",
    desc: "Praktyczny podręcznik CBT: pomaga rozpoznawać automatyczne myśli i zmieniać destrukcyjne schematy: Dennis Greenberger, Christine A. Padesky",
    link: "https://wuj.pl/ksiazka/umysl-ponad-nastrojem-zmien-nastroj-poprzez-zmiane-sposobu-myslenia",
    isVerfied: true,
  },
  {
    title: "Partnerstwo bliskości",
    desc: "O stylach przywiązania i tym, dlaczego w relacjach pojawia się lęk, potrzeba kontroli czy silna zależność emocjonalna: Amir Levine, Rachel Heller",
    link: "https://www.empik.com/partnerstwo-bliskosci-jak-teoria-wiezi-pomoze-ci-stworzyc-szczesliwy-zwiazek-levine-amir-heller-rachel,p1237097449,ksiazka-p",
    isVerfied: false,
  },
  {
    title: "Odważ się być nielubianym",
    desc: "O niezależności od opinii innych, odpowiedzialności za własne życie i budowaniu własnej wartości: Ichiro Kishimi, Fumitake Koga",
    link: "https://www.empik.com/szukaj/produkt?q=odwa%C5%BC+si%C4%99+by%C4%87+nielubianym",
    isVerfied: false,
  },
  {
    title: "Dary niedoskonałości",
    desc: "O wstydzie, poczuciu własnej wartości, akceptacji siebie i odwadze bycia sobą: Brené Brown",
    link: "https://mtbiznes.pl/rozwoj-osobisty/dary-niedoskonalosci",
    isVerfied: true,
  },
  {
    title: "Emocjonalna zwinność",
    desc: "Uczy, jak nie być niewolnikiem złości, smutku, lęku czy innych trudnych emocji: Susan David",
    link: "https://www.empik.com/szukaj/produkt?q=emocjonalna+zwinno%C5%9B%C4%87+susan+david",
    isVerfied: false,
  },
  {
    title: "Potęga teraźniejszości",
    desc: "Pomaga ograniczyć ciągłe wracanie do przeszłości i nakręcanie scenariuszy dotyczących przyszłości: Eckhart Tolle",
    link: "https://www.empik.com/potega-terazniejszosci-tolle-eckhart,prod58962437,ksiazka-p",
    isVerfied: true,
  },
  {
    title: "Mężczyźni są z Marsa, kobiety z Wenus",
    desc: "O komunikacji i różnicach w potrzebach w związkach. Traktowałbym ją raczej jako książkę popularnonaukową niż źródło współczesnej wiedzy klinicznej: John Gray",
    link: "https://www.empik.com/mezczyzni-sa-z-marsa-kobiety-z-wenus-gray-john,p1322076713,ksiazka-p",
    isVerfied: true,
  },
]);

const filteredAppInfoBase = ref(appInfoBase.value);
const isSwitched = ref(true);

watch(isSwitched, (newIsSwitched) => {
  filteredAppInfoBase.value = newIsSwitched
    ? appInfoBase.value
    : bookInfoBase.value;
});

const filterApps = (term: string) => {
  const searchTerm = term.toLowerCase();
  const source = isSwitched.value ? appInfoBase.value : bookInfoBase.value;

  filteredAppInfoBase.value = source.filter(
    ({ title, desc }) =>
      title.toLowerCase().includes(searchTerm) ||
      desc.toLowerCase().includes(searchTerm),
  );
};
</script>

<style></style>
