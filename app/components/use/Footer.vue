<template>
  <footer class="py-4 text-gray-400 text-center pb-20 lg:pb-0">
    <div class="flex gap-4 justify-center my-4 flex-col md:flex-row">
      <nuxt-link to="/privacy">
        <p class="hover:text-gray-200 cursor-pointer">Polityka prywatności</p>
      </nuxt-link>
      <nuxt-link to="/about">
        <p class="hover:text-gray-200 cursor-pointer">O projekcie</p>
      </nuxt-link>
      <nuxt-link to="/app/updates">
        <p class="hover:text-gray-200 cursor-pointer">Updates</p>
      </nuxt-link>
      <nuxt-link to="/terms">
        <p class="hover:text-gray-200 cursor-pointer">Regulamin</p>
      </nuxt-link>
    </div>
    <p>&copy; 2025 InsideOutLife.</p>
  </footer>
</template>

<script lang="ts" setup></script>

<style></style>
