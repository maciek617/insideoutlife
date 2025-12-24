<template>
  <button
    class="py-2 px-4 rounded-full shadow-xl text-white cursor-pointer disabled:cursor-not-allowed"
    :class="props.error ? 'btn-grad-error' : 'btn-grad'"
    :disabled="props?.loading"
  >
    {{ props.loading ? "Ładowanie..." : props.text }}
  </button>
</template>

<script lang="ts" setup>
const props = defineProps<{
  text: string;
  loading?: boolean;
  error?: boolean;
}>();
</script>

<style>
.btn-grad {
  background-image: linear-gradient(to right, #f14d5c 0%, #fdc70c 100%);
}
.btn-grad {
  padding: 7px 25px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  border-radius: 10px;
}

.btn-grad:hover {
  background-position: right center; /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}

.btn-grad-error {
  background-image: linear-gradient(
    to right,
    #eb3349 0%,
    #f45c43 51%,
    #eb3349 100%
  );
}
.btn-grad-error {
  padding: 7px 25px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  border-radius: 10px;
}

.btn-grad-error:hover {
  background-position: right center; /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}
</style>
