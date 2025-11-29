<template>
  <div v-if="randomQoute" class="mt-4">
    <p class="text-5xl">❝</p>
    <p class="text-2xl -mt-4 font-thin max-w-2xl">{{ randomQoute.qoute }}</p>
    <p class="text-xs font-bold tracking-wider uppercase text-gray-400 mt-4">
      ~{{ randomQoute.author }}
    </p>
  </div>
</template>

<script lang="ts" setup>
const qoutes = ref([
  {
    qoute:
      "Przeciwności losu powodują, że jedni się załamują, a inni łamią rekordy.",
    author: "William A. Ward",
  },
  {
    qoute: "Zanim coś osiągniesz, musisz czegoś od siebie oczekiwać.",
    author: "Michael Jordan",
  },
  {
    qoute:
      "Może są ludzie, którzy mają więcej talentu niż Ty, ale nie ma wymówek, dla których ktokolwiek miałby pracować ciężej niż Ty.",
    author: "Derek Jeter",
  },
  {
    qoute:
      "Nie liczy się wola zwycięstwa – każdy ją ma. Liczy się chęć przygotowania się do wygranej.",
    author: "Paul Bryant",
  },
  {
    qoute:
      "Wszystko, co negatywne – presja, wyzwania – jest dla mnie okazją do wzniesienia się.",
    author: "Kobe Bryant",
  },
  {
    qoute:
      "Moment, w którym się poddajesz, to moment, w którym pozwalasz komuś innemu wygrać.",
    author: "Kobe Bryant",
  },
  {
    qoute:
      "Kiedy już wiesz, czym jest porażka, włącza się determinacja, która dąży do sukcesu.",
    author: "Kobe Bryant",
  },
  {
    qoute: "Szczęście to jedyna rzecz, która się mnoży, gdy się ją dzieli.",
    author: "Albert Schweitzer",
  },
  {
    qoute:
      "Przeciwności losu powodują, że jedni się załamują, a inni łamią rekordy.",
    author: "William A. Ward",
  },
  {
    qoute:
      "Każdy jest geniuszem. Jednak, jeśli oceniasz rybę na podstawie jej umiejętności wspinania się na drzewa, przez całe życie będzie sądziła, że jest głupia.",
    author: "Albert Einstein",
  },
  {
    qoute:
      "Jeżeli nie potrafisz czegoś prosto wyjaśnić – to znaczy, że niewystarczająco to rozumiesz.",
    author: "Albert Einstein",
  },
  {
    qoute:
      "Szaleństwem jest robić wciąż to samo i oczekiwać różnych rezultatów.",
    author: "Albert Einstein",
  },
  {
    qoute: "Kto zaniedbuje planowanie, planuje zaniedbanie.",
    author: "Benjamin Franklin",
  },
  {
    qoute:
      "Przeciwności losu powodują, że jedni się załamują, a inni łamią rekordy.",
    author: "William A. Ward",
  },
  {
    qoute:
      "Stajesz się bogatym, stając się wartościowym, a następnie niedostępnym.",
    author: "Dakota Robertson",
  },
  {
    qoute: "Nie porównuj czyjejś wystawy ze swoim zapleczem.",
    author: "Paulina Maciboch",
  },
  {
    qoute: "Odseparuj się od rezultatów. Skup się na procesie.",
    author: "Taylor Welch",
  },
  {
    qoute: "Jesteś średnią 5 osób, z którymi spędzasz najwięcej czasu.",
    author: "Taylor Welch",
  },
  {
    qoute:
      "Słaba osoba w dobrym środowisku poradzi sobie lepiej, niż silna osoba w kiepskim środowisku.",
    author: "Taylor Welch",
  },
  {
    qoute:
      "Gdzieś na świecie jest ktoś mniej kompetentny niż Ty, kto zarabia więcej niż Ty, bo po prostu zaczął działać.",
    author: "Taylor Welch",
  },
  {
    qoute:
      "Jak długo jesteś w stanie wykonywać właściwe czynności bez rezultatu, zanim zmieni się Twoje zachowanie?",
    author: "Taylor Welch",
  },
  {
    qoute: "Konsekwencja pokonuje wybitność",
    author: "Taylor Welch",
  },
  {
    qoute:
      "Jeśli dzisiejszy dzień powtórzyłby się 1000 razy, czy byłbyś bliżej swojego celu?",
    author: "Taylor Welch",
  },
  {
    qoute: "Twoje życie staje się lepsze, tylko kiedy ty stajesz się lepszym.",
    author: "Brian Tracy",
  },
  {
    qoute:
      "Jeśli to, co robisz nie zbliża Cię do Twoich celów, oznacza to, że Cię od nich oddala.",
    author: "Brian Tracy",
  },
  {
    qoute: "Żeby więcej zarabiać, musisz się więcej nauczyć.",
    author: "Brian Tracy",
  },
  {
    qoute:
      "Znajdź sobie dobre towarzystwo. Współpracuj z pozytywnymi, zorientowanymi na cele ludźmi, którzy inspirują Cię i pobudzają do działania.",
    author: "Brian Tracy",
  },
  {
    qoute:
      "Umiejętność zdyscyplinowania się, by zrezygnować z natychmiastowej satysfakcji w zamian za większą nagrodę w dłuższej perspektywie jest nieodzownym warunkiem sukcesu.",
    author: "Brian Tracy",
  },
  {
    qoute:
      "Ludzie sukcesu zawsze szukają możliwości niesienia pomocy innym. Nieudacznicy zawsze pytają: „A co mi za to dasz?”",
    author: "Brian Tracy",
  },
  {
    qoute:
      "Największym błędem, jaki możemy kiedykolwiek popełnić w życiu, jest myślenie, że pracujemy dla kogokolwiek innego niż dla siebie.",
    author: "Brian Tracy",
  },
  {
    qoute:
      "Żadne zadanie nie jest szczególnie trudne, jeśli podzielisz je na mniejsze podzadania.",
    author: "Henry Ford",
  },
  {
    qoute:
      "Gdybym zapytał moich klientów, czego chcą, powiedzieliby mi, że szybszego konia.",
    author: "Henry Ford",
  },
  {
    qoute: "Ludzie boją się zmian, nawet na lepsze.",
    author: "J. I. Kraszewski",
  },
  {
    qoute: "Licz na najlepsze, ale przygotuj się na najgorsze.",
    author: "Lee Child",
  },
  {
    qoute:
      "Nigdy nie rezygnuj z celu tylko dla tego, że osiągnięcie go wymaga czasu. Czas i tak upłynie.",
    author: "H. Jackson Brown, Jr.",
  },
  {
    qoute:
      "Jeśli chcesz coś osiągnąć, musisz być w stanie pokonać strach i działać pomimo niepewności.",
    author: "Mark Twain",
  },
  {
    qoute: "Nie pozwól, by przeszłość przeszkadzała ci w twojej przyszłości.",
    author: "„Złap mnie, jeśli potrafisz”",
  },
  {
    qoute: "Jedyną osobą, która może cię zatrzymać, jesteś ty sam.",
    author: "„Rocky”",
  },
  {
    qoute:
      "Gniew jest jak trucizna, która niszczy twoje życie i życie innych ludzi.",
    author: "Mahatma Gandhi",
  },
  {
    qoute:
      "Emocje są jak fale, które mogą być kontrolowane, ale nie zatrzymane.",
    author: "Nieznany",
  },
  {
    qoute: "Jeśli nie panujesz nad swoimi emocjami, one będą panować nad tobą.",
    author: "Epiktet",
  },
  {
    qoute:
      "Gniew jest jak ogień, który może być użyty do gotowania lub do spalania.",
    author: "Nieznany",
  },
  {
    qoute:
      "Emocje są jak barwy, które mogą być mieszane i tworzyć nowe kolory.",
    author: "Nieznany",
  },
  {
    qoute: "Życie jest piękne, jeśli potrafisz je docenić.",
    author: "Steve Jobs",
  },
  {
    qoute: "Życie jest pełne niespodzianek, ale to one czynią je pięknym.",
    author: "Nieznany",
  },
  {
    qoute: "Życie jest jak sztuka, która musi być tworzona każdego dnia.",
    author: "Nieznany",
  },
  {
    qoute: "Życie jest piękne, jeśli potrafisz je kochać.",
    author: "Nieznany",
  },
  {
    qoute:
      "Życie jest krótkie, ale możesz je uczynić długim, jeśli potrafisz je docenić.",
    author: "Nieznany",
  },
  {
    qoute: "Życie jest jak podróż, która musi być odbyta z otwartymi oczami.",
    author: "Nieznany",
  },
  {
    qoute: "Życie jest pełne wyborów, ale to one czynią je interesującym.",
    author: "Nieznany",
  },
  {
    qoute: "Życie jest jak książka, która musi być czytana każdego dnia.",
    author: "Nieznany",
  },
  {
    qoute:
      "Cel jest jak gwiazda, która musi być śledzona, aby można było do niej dotrzeć.",
    author: "Nieznany",
  },
  {
    qoute:
      "Cel jest jak most, który musi być zbudowany, aby można było go przekroczyć.",
    author: "Nieznany",
  },
  {
    qoute:
      "Cel jest jak szczyt, który musi być zdobyty, aby można było zobaczyć widok.",
    author: "Nieznany",
  },
  {
    qoute:
      "Cel jest jak marzenie, które musi być spełnione, aby można było być szczęśliwym.",
    author: "Nieznany",
  },
  {
    qoute:
      "Cel jest jak cel, który musi być osiągnięty, aby można było poczuć satysfakcję.",
    author: "Nieznany",
  },
  {
    qoute: "Mądrzy ciągle się uczą, głupcy najczęściej wszystko umieją.",
    author: "Apolinary Despinoix",
  },
  {
    qoute:
      "Jesteśmy tym, co w swoim życiu powtarzamy. Doskonałość nie jest jednorazowym aktem, lecz nawykiem.",
    author: "M. Scott Peck",
  },
  {
    qoute:
      "Nie jesteś odpowiedzialny za to, jakie masz do dyspozycji możliwości – ale jesteś moralnie zobowiązany, by wykorzystać maksymalnie te, które posiadasz.",
    author: "Walter Williams",
  },
  {
    qoute: "Sukces to jest tam gdzie przygotowanie spotyka się z okazją.",
    author: "Joyce Brothers",
  },
  {
    qoute:
      "Cierpliwość, wytrwałość i pot tworzą niepokonaną kombinację sukcesu.",
    author: "Napoleon Bonaparte",
  },
  {
    qoute:
      "Wielkie umysły dyskutują o pomysłach, średnie umysły dyskutują o wydarzeniach, a małe umysły o ludziach.",
    author: "Eleanor Roosevelt",
  },
  {
    qoute:
      "Nie ma rzeczy niemożliwych, są tylko rzeczy, których jeszcze nie zrobiliśmy.",
    author: "Janusz Korczak",
  },
  {
    qoute: "Dopóki walczysz jesteś zwycięzcą.",
    author: "św. Augustyn z Hippony",
  },
  {
    qoute: "Jeśli chcesz coś zmienić, musisz zacząć od siebie.",
    author: "Mahatma Gandhi",
  },
  {
    qoute: "Ludzie mogą wątpić w to, co mówisz, ale uwierzą w to, co robisz.",
    author: "Lewis Cass",
  },
  {
    qoute:
      "Być zwyciężonym i nie ulec to zwycięstwo, zwyciężyć i osiąść na laurach to klęska.",
    author: "Marszałek Józef Piłsudski",
  },
  {
    qoute:
      "Najlepszym zawodnikiem nie jest ten, któremu się chce, lecz ten, kto robi to, co powinien, pomimo tego, że mu się nie chce.",
    author: "Nieznany",
  },
  {
    qoute:
      "W życiu nie chodzi o czekanie aż burza minie. Chodzi o to, by nauczyć się tańczyć w deszczu.",
    author: "Vivian Green",
  },
  {
    qoute: "Im więcej potu na treningu, tym mniej krwi w boju.",
    author: "Howard E. Wasdin",
  },
]);

const randomQouteIndex = ref();
const randomQoute = computed(() => qoutes.value[randomQouteIndex.value]);
onMounted(() => {
  randomQouteIndex.value = Math.floor(Math.random() * qoutes.value.length);
});
</script>

<style></style>
