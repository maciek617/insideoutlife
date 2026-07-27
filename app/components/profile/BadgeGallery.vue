<template>
  <div class="mt-5 lg:mt-10 xl:mt-14">
    <p class="text-lg lg:text-xl 2xl:text-2xl">
      Twoje zdobyte odznaki, kliknij na tą którą chcesz mieć aktywną!
    </p>
    <div class="flex flex-wrap gap-5 mt-5">
      <button
        v-for="badge in badges"
        :key="badge"
        @click="setActiveBadge(badge)"
        class="p-4 rounded-xl transition cursor-pointer"
        :class="{
          'border-yellow-400 border': activeBadge === badge,
        }"
      >
        <component :is="badgeComponents[badge]" />
      </button>

      <div v-if="!badges.length">
        <p>Aktualnie nie masz żadnych zdobytych odznak!</p>
        <NuxtLink to="/app/challenges">
          <p class="cursor-pointer text-orange-400 font-bold text-lg">
            Zdobądź odznakę!
          </p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { badgeComponents } from "~/utils/badges";

const { badges, activeBadge, getBadges, setActiveBadge } = useBadges();

await getBadges();
</script>
