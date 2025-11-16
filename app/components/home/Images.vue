<template>
  <div class="mt-20">
    <div class="flex flex-wrap gap-4 justify-between">
      <div class="sm:max-w-1/3 xl:max-w-1/2">
        <HomeHeader text="Poznaj aplikację!" />
        <p class="text-gray-300 mt-4 lg:text-lg xl:text-xl">
          Sprawdź jak wygląda wnętrze aplikacji, by nic Cię nie zaskoczyło po
          zalogowaniu i zacznij korzystać w pełni!
        </p>
      </div>
      <div>
        <NuxtImg
          :src="images[currentImage]"
          alt="Widok aplikacji"
          class="h-92 w-sm object-contain block rounded-xl shadow-2xl shadow-orange-400 md:w-md lg:w-lg xl:w-xl 2xl:w-2xl"
        />
        <div class="mt-8 flex justify-center gap-4">
          <span
            v-for="(img, index) in images"
            :key="img"
            class="w-5 h-5 rounded-full bg-orange-500 block cursor-pointer"
            :class="currentImage === index ? 'bg-orange-500' : 'bg-white'"
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
