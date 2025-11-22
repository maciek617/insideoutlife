<template>
  <div
    class="mt-20 flex flex-col-reverse items-center lg:flex-row-reverse lg:justify-between lg:items-start lg:mt-24 xl:mt-32"
  >
    <IconsHello />
    <div class="lg:flex flex-col justify-start items-start">
      <p
        class="uppercase tracking-widest text-sm font-medium text-gray-400 text-center lg:text-left"
      >
        pełna anonimowość
      </p>
      <p
        class="text-center text-xl font-bold lg:text-2xl lg:pt-4 xl:text-4xl max-w-md lg:text-left"
      >
        Jeśli jeszcze nie dołączyłeś do InsideOutLife!
      </p>
      <p class="max-w-md mt-2 text-gray-300 text-center lg:text-left">
        W pełnej anonimowości odzyskasz siłę, spokój i kontrolę nad swoim
        życiem. Pamiętaj, to pierwszy krok to stania się lepszą wersją siebie!
      </p>
      <NuxtLink to="/login" class="w-fit mt-4 lg:mt-6">
        <UseButton
          text="Dołącz teraz!"
          class="mx-auto block mt-4 lg:mx-0 lg:mxr-auto"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
