<template>
  <div class="mt-20 lg:mt-32 xl:mt-52">
    <div class="flex flex-wrap gap-4 justify-around">
      <div class="sm:max-w-1/3 xl:max-w-1/2">
        <HomeHeader text="Poznaj aplikację!" />
        <p class="text-gray-300 mt-4 font-thin max-w-lg lg:text-lg xl:text-xl">
          Sprawdź jak wygląda wnętrze aplikacji, by nic Cię nie zaskoczyło po
          zalogowaniu i zacznij korzystać w pełni!
        </p>

        <NuxtLink to="/login" class="block w-fit mx-auto lg:mx-0">
          <UseButton text="Sprawdź!" class="w-fit mx-auto block mt-6 lg:mx-0" />
        </NuxtLink>
      </div>
      <div>
        <div class="relative">
          <div
            class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 max-w-24 w-full z-10 h-72 lg:max-w-md rounded-full bg-gradient-to-r from-[#F14D5C] to-[#FDC70C] blur-3xl"
          ></div>
          <NuxtImg
            :src="images[currentImage]"
            alt="Widok aplikacji"
            class="relative h-92 w-sm object-contain block rounded-xl z-40 md:w-md lg:w-lg xl:w-xl 2xl:w-2xl"
          />
        </div>

        <div class="mt-8 flex justify-center gap-4">
          <span
            v-for="(img, index) in images"
            :key="img"
            class="w-5 h-5 rounded-full bg-[#F14D5C] block cursor-pointer"
            :class="currentImage === index ? 'bg-[#F14D5C]' : 'bg-white'"
            @click="currentImage = index"
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const images = ref(["/1.png", "/2.png", "/3.png"]);
const currentImage = ref(0);
</script>

<style></style>
