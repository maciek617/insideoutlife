<template>
  <div
    class="nuxt-scroll-progress"
    role="progressbar"
    :aria-valuemin="0"
    :aria-valuemax="100"
    :aria-valuenow="Math.round(progress)"
    aria-hidden="false"
  >
    <div class="bar" :style="{ width: progress + '%' }" />
  </div>
</template>

<script lang="ts" setup>
let rafId: any = null;
const progress = ref(0);

const calcProgress = () => {
  const doc = document.documentElement;
  const scrollTop = window.pageYOffset || doc.scrollTop || 0;
  const scrollHeight = doc.scrollHeight - doc.clientHeight;
  const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
  return Math.min(100, Math.max(0, pct));
};

function onScroll() {
  // pakujemy w RAF, żeby odciążć frame (płynność)
  if (rafId) return;
  rafId = requestAnimationFrame(() => {
    progress.value = calcProgress();
    rafId = null;
  });
}

onMounted(() => {
  // update początkowy (np. gdy użytkownik wszedł z anchor linkiem)
  progress.value = calcProgress();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("resize", onScroll);
  if (rafId) cancelAnimationFrame(rafId);
});
</script>

<style>
.nuxt-scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 8px; /* wysokość paska — zmień jeśli chcesz */
  width: 100%;
  z-index: 9999;
  pointer-events: none; /* nie przeszkadza w klikaniu */
  background: transparent;
}

/* wewnętrzny pasek, animowany poprzez width */
.nuxt-scroll-progress .bar {
  height: 100%;
  width: 0%;
  transition: width 120ms linear; /* krótka, płynna animacja */
  background: linear-gradient(90deg, #fb5230, #f09919);
  box-shadow: 0 0 8px rgba(6, 182, 212, 0.2);
}
</style>
