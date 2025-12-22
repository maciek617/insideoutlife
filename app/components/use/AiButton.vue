<template>
  <div
    class="group w-fit rainbow relative z-0 overflow-hidden p-0.5 flex items-center justify-center rounded-full hover:scale-101 transition duration-300 active:scale-100 cursor-pointer"
  >
    <div
      class="absolute inset-0 blur-2xl opacity-0 bg-gradient-to-r from-pink-500 to-purple-400 transition-opacity group-hover:opacity-50"
    ></div>
    <button
      class="px-8 text-sm py-3 text-white rounded-full font-medium bg-black flex items-center gap-2 cursor-pointer"
    >
      <IconsStars class="z-10 w-5 h-5 fill-[#ff0a7f]" />
      <span class="z-10 bg-gradient-to-r from-orange-400 to-pink-500
         bg-clip-text text-transparent">Streszczenie</span>
    </button>
  </div>
</template>

<script lang="ts" setup></script>

<style>
@keyframes rotate {
  100% {
    transform: rotate(1turn);
  }
}

.rainbow::before {
  content: "";
  position: absolute;
  z-index: -2;
  left: -50%;
  top: -50%;
  width: 200%;
  height: 200%;
  background-position: 100% 50%;
  background-repeat: no-repeat;
  background-size: 50% 30%;
  filter: blur(6px);
  background-image: linear-gradient(#ff0a7f, #780eff);
  animation: rotate 4s linear infinite;
}
</style>
