<template>
  <div class="text-white p-4 min-h-[100vh] flex justify-center items-center">
    <div class="hidden lg:block flex-1 h-fit w-full">
      <NuxtImg
        src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg"
        alt="Uśmiechający się mężczyzna"
        class="w-full h-full object-cover"
      />
      <p class="italic text-center font-thin mt-2 text-xl">
        "Nie pozwól by zdrada Cię złamała!"
      </p>
    </div>
    <div class="flex flex-1 flex-col justify-center items-center">
      <div>
        <h1 class="text-3xl">Witaj z powrotem!</h1>
        <p class="text-gray-400">
          Nie masz konta?
          <NuxtLink
            to="/register"
            class="bg-clip-text text-transparent bg-gradient-to-r from-[#F14D5C] to-[#FDC70C]"
          >
            Zarejestruj się
          </NuxtLink>
        </p>
      </div>

      <div class="mt-10">
        <form @submit.prevent="handleLogin">
          <div v-for="(field, index) in loginFields" :key="index" class="mt-4">
            <input
              v-model="field.value"
              :type="field.type"
              :placeholder="field.placeholder"
              required
              class="bg-[#212121] px-4 py-2 rounded shadow-xl min-w-xs w-full"
            />
          </div>
          <p class="text-red-400">{{ error }} {{ loginError }}</p>
          <UseButton
            text="Zaloguj się"
            :loading="loading"
            class="mx-auto block mt-4"
          />
        </form>
      </div>

      <!-- <div>
        <p class="text-center text-gray-400 mt-10">Lub</p>
        <button class="py-1 px-4 border rounded mx-auto block mt-4">
          Google
        </button>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { useAuth } from "#imports";

definePageMeta({
  middleware: "not-auth",
});

const loginFields = reactive([
  { value: "", type: "email", placeholder: "Email" },
  { value: "", type: "password", placeholder: "Hasło" },
]);

const error = ref("");
const loading = ref(false);

const formData = computed(() => {
  const emailField =
    loginFields.find((f) => f.placeholder === "Email")?.value || "";
  const passwordField =
    loginFields.find((f) => f.placeholder === "Hasło")?.value || "";
  return {
    email: emailField,
    password: passwordField,
  };
});

const handleLogin = async () => {
  loading.value = true;
  const { email, password } = formData.value;
  error.value = "";
  if (!email || !password) {
    error.value = "Wypełnij wszystkie pola";
    loading.value = false;
    return;
  }

  await login(email, password);
  loading.value = false;
};
const { loginError, login } = useAuth();
</script>

<style></style>
