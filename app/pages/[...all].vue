<template>
  <div class="h-[91vh] flex justify-start items-center flex-col p-4">
    <Icons404 />
    <div class="text-white flex items-center justify-center flex-col gap-4">
      <p class="text-2xl text-center lg:text-3xl xl:text-4xl">
        Przykro mi, ale chyba się zgubiłeś :(
      </p>
      <NuxtLink to="/">
        <UseButton text="Strona główna" />
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
