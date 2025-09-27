<template>
  <div class="bg">
    <div class="container mx-auto">
      <slot />
    </div>

    <UseFooter />
  </div>
</template>

<style>
.bg {
  background-image: linear-gradient(to right, #1c1c1c 0%, black 100%);
}
</style>
