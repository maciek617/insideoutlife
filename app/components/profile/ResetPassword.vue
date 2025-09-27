<template>
  <div class="mt-20">
    <p class="text-2xl">Ustaw nowe hasło</p>
    <input
      v-model="password"
      type="password"
      class="bg-[#212121] px-4 py-2 rounded shadow-xl min-w-xs max-w-sm w-full my-2 block"
      placeholder="Nowe hasło"
    />
    <input
      v-model="newPassword"
      type="password"
      class="bg-[#212121] px-4 py-2 rounded shadow-xl min-w-xs max-w-sm w-full my-2 block"
      placeholder="Powtórz nowe hasło"
    />
    <p class="text-red-400" v-if="error">{{ error }}</p>
    <UseButton text="Zapisz" class="mt-4" @click="handleChangePassword" />
  </div>
</template>

<script lang="ts" setup>
const password = ref("");
const newPassword = ref("");
const error = ref("");

const { changePassword } = useAuth();

async function handleChangePassword() {
  error.value = "";
  if (!password.value || !newPassword.value) {
    error.value = "Wszystkie pola muszą być wypełnione";
    return;
  }

  if (password.value !== newPassword.value) {
    error.value = "Hasła do siebie nie pasują";
    return;
  }

  error.value = "";
  await changePassword(newPassword.value);
}
</script>

<style></style>
