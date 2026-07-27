<template>
  <div class="container mx-auto min-h-screen p-5 text-white">
    <NuxtLink to="/app/challenges">
      <UseButton text="Powrót" />
    </NuxtLink>

    <div v-if="badgeClaimed" class="mt-10 text-center">
      <p class="text-xl">Gratulacje! Odebrałeś już swoją odznakę!</p>

      <p>
        Odebrano:
        {{ new Date(userChallengeInfo?.updated_at!).toLocaleDateString() }}
      </p>

      <p class="mt-3">
        Przejdź do
        <NuxtLink
          to="/app/profile"
          class="text-orange-400 cursor-pointer italic"
          >profilu</NuxtLink
        >
      </p>

      <BadgesSleep class="mt-10" />
    </div>

    <GetBadge
      v-else-if="challengeDone"
      class="mt-10"
      @get-badge="challengeGetBadge"
    />

    <div v-else>
      <h1 class="text-3xl mt-4">Znawca Snu</h1>

      <p class="font-thin mt-1">
        Twoim celem jest przez minimum 7 dni z rzędu zadbać o zdrowy sen.
      </p>

      <div class="mt-4 font-thin">
        <p class="text-xl">Wytyczne:</p>

        <div class="text-sm">
          <p>- Stałe pory zasypiania i wstawania</p>
          <p>- Od 7 do 9 godzin snu</p>
          <p>- W miarę możliwości postaraj się ochłodzić pokój</p>
          <p>
            - Na minimum 1 godzinę przed snem odłóż wszystkie źródła
            niebieskiego światła
          </p>
          <p>- Unikaj kofeiny, alkoholu oraz innych używek</p>
        </div>
      </div>

      <div
        v-if="!showNextTask"
        class="text-white bg-black rounded-full flex items-center px-3 py-2 gap-4 mt-6 max-w-sm shadow"
      >
        <div
          @click="updateStage"
          class="w-4 h-4 bg-transparent border rounded-full cursor-pointer hover:bg-white transition-colors"
        />

        <p class="font-bold">Dzień {{ userChallengeInfo?.current_stage }}</p>
      </div>

      <NextTask v-if="shouldShowNextTask" class="mt-10" />
    </div>
  </div>
</template>

<script setup lang="ts">
import GetBadge from "~/components/challenges/GetBadge.vue";
import NextTask from "~/components/challenges/NextTask.vue";

const {
  userChallengeInfo,
  showNextTask,
  badgeClaimed,
  challengeDone,
  shouldShowNextTask,
  init,
  updateStage,
  challengeGetBadge,
} = useChallenge("7daysleep");

await init();
</script>
