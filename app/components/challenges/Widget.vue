<template>
  <div class="bg-[#CCFF00] px-4 py-2 rounded-xl max-w-sm">
    <p class="font-extrabold text-xl">7 dni lepszego snu</p>
    <p class="font-thin text-lg">
      7 dni snu minimum 7 godzin dziennie, śledź swój postęp.
    </p>
    <p class="mt-4">
      Odznaka za ukończenie: <span class="font-bold">Znawca Snu</span>
    </p>

    <NuxtLink to="/app/challenges/7daysleep">
      <button
        class="shadow bg-black text-white rounded-full px-10 py-1.5 mt-6 cursor-pointer hover:text-black hover:bg-white transition-colors"
      >
        Zacznij!
      </button>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
