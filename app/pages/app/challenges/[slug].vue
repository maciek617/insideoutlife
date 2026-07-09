<template>
  <div class="container mx-auto p-5 min-h-screen">
    <NuxtLink to="/app/challenges">
      <UseButton text="Powrót" />
    </NuxtLink>

    <div class="text-white mt-8">
      <h1 class="text-2xl lg:text-3xl 2xl:text-4xl">Projekt: JA🔥</h1>

      <div class="grid grid-cols-2 gap-4 max-w-xl mt-10">
        <ChallengesStatWidget
          color="yellow"
          title="Wykonane zadania"
          :current-stat="12"
          :available-stat="30"
        />
        <ChallengesStatWidget
          color="blue"
          title="Poświęcone godziny"
          :current-stat="12"
          :available-stat="30"
        />
        <ChallengesStatWidget
          color="pink"
          title="Interakcji społecznych"
          :current-stat="12"
          :available-stat="30"
        />
        <ChallengesStatWidget
          color="white"
          title="Rozwój osobisty"
          :current-stat="12"
          :available-stat="30"
        />
      </div>

      <div class="mt-14">
        <ChallengesCurrentTask
          @task-done="showNextTask = true"
          class="transition-all"
          :class="
            showNextTask ? 'opacity-0 translate-y-1/2 fixed ' : 'opacity-100'
          "
        />
        <ChallengesNextTask v-show="showNextTask" />
        <!-- <ChallengesGetBadge /> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const showNextTask = ref(false);
</script>

<style></style>
