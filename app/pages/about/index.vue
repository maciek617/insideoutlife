<template>
  <div class="min-h-[100vh] p-4 text-white lg:pt-10 xl:pt-20">
    <div class="flex items-center justify-around">
      <div>
        <p class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
          Jestem Maciej 👋
        </p>
        <p class="my-4 max-w-xl lg:text-xl">
          Moją misją jest stworzenie bezpiecznej przestrzeni dla mężczyzn,
          którzy doświadczyli zdrady i chcą odbudować swoje życie.
        </p>
        <p class="my-4 max-w-2xl lg:mt-8 lg:text-xl xl:mt-16">
          Wiem, że w takich momentach trudno jest rozmawiać z bliskimi czy
          szukać pomocy. Bo mężczyzna ma być twardy i silny przecież 🙃, a
          współczynnik sa*ob*js*w mówi sam za siebie. Dlatego stworzyłem
          aplikację która:
        </p>
        <p class="flex items-center gap-4">
          <span class="block">🟠</span>Zapewnia anonimowość
        </p>
        <p class="flex items-center gap-4 mt-4">
          <span class="block">🟠</span>Daje możliwość prowadzenia dziennika
          emocji
        </p>
        <p class="flex items-center gap-4 mt-4">
          <span class="block">🟠</span>Pozwala znaleźć wsprarcie w społeczności
          osób w podobnej sytuacji
        </p>
        <p class="flex items-center gap-4 mt-4">
          <span class="block">🟠</span>Udostępnia artykuły i materiały
          pomagające w powrocie do równowagi.
        </p>
      </div>
      <IconsMe class="hidden lg:block" />
    </div>

    <p class="mt-10 text-center lg:mt-20">
      Nie jesteśmy terapeutami ani specjalistami – ale wierzymy w siłę wspólnoty
      i w to, że dzielenie się doświadczeniami pomaga.
    </p>

    <p class="text-center italic mt-4">
      “Nie jesteś sam. Każdy dzień to krok ku odbudowie.”
    </p>

    <NuxtLink to="/">
      <UseButton text="Strona główna" class="mx-auto block mt-4" />
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
