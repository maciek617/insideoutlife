<template>
  <div class="pt-20 lg:pt-28 xl:pt-40 2xl:pt-52">
    <div class="flex justify-center lg:justify-around">
      <div>
        <h1
          class="font-bold text-4xl max-w-lg text-center lg:text-5xl lg:text-left xl:text-7xl"
        >
          Nie jesteś sam <span class="text-[#ff512f]">Inside</span
          ><span class="text-[#f09819]">Out</span
          ><span class="text-[#3DA894]">.</span>
        </h1>
        <p
          class="text-gray-300 text-center text-md mt-2 max-w-lg mx-auto font-light lg:text-lg lg:text-left lg:mx-0 xl:text-xl xl:mt-4"
        >
          Aplikacja wspierająca mężczyzn po zdradzie. Anonimowo, bez oceniania,
          z realnym wsparciem.
          <span class="text-sm block">#ProszenieOPomocJestMeskie</span>
        </p>
        <NuxtLink to="/login" class="block w-fit mx-auto lg:mx-0">
          <UseButton
            text="Dołącz teraz!"
            class="w-fit mx-auto block mt-6 lg:mx-0"
          />
        </NuxtLink>
        <div class="mt-52 text-center lg:text-left">
          <p class="font-thin text-gray-300">*W sytuacjach zagrożenia życia</p>
          <p class="font-bold">📞 999 <span class="font-thin">lub</span> 112</p>
        </div>
      </div>
      <div class="relative max-w-xl w-full -mt-16 hidden lg:block xl:-mt-20">
        <div
          class="absolute mt-2 bottom-10 left-1/2 -translate-x-1/2 w-24 z-10 h-8 bg-gradient-to-r from-[#F14D5C] to-[#FDC70C] blur-2xl"
        ></div>
        <IconsHero class="relative z-10 w-full animate-pulse" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
