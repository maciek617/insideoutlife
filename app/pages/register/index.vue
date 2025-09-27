<template>
  <div class="text-white p-4 min-h-[100vh] flex justify-center items-center">
    <div class="hidden lg:block flex-1 h-fit w-full">
      <img
        src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg"
        alt=""
        class="w-full h-full object-cover"
      />
      <p class="italic text-center mt-2 text-xl">
        "Nie pozwól by zdrada Cię złamała!"
      </p>
    </div>
    <div class="flex flex-1 flex-col justify-center items-center">
      <div>
        <h1 class="text-3xl">Stwórz konto</h1>
        <p class="text-gray-400">
          Masz już konto?
          <NuxtLink to="/login" class="text-orange-200">Zaloguj się</NuxtLink>
        </p>
      </div>

      <div class="mt-10">
        <form @submit.prevent="handleRegister">
          <div
            v-for="(field, index) in registerFields"
            :key="index"
            class="mt-4"
          >
            <input
              v-model="field.value"
              :type="field.type"
              :placeholder="field.placeholder"
              required
              class="bg-[#212121] px-4 py-2 rounded shadow-xl min-w-xs w-full"
            />
          </div>
          <div class="flex gap-2 items-center mt-4">
            <input type="checkbox" v-model="termsAccepted" />
            <p>
              Akceptuję
              <NuxtLink to="/terms" target="_blank" class="text-orange-200"
                >regulamin</NuxtLink
              >
              oraz
              <NuxtLink to="/privacy" target="_blank" class="text-orange-200"
                >politykę prywatności</NuxtLink
              >
            </p>
          </div>
          <p class="text-red-400">{{ error }}</p>
          <UseButton
            text="Stwórz konto"
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

const registerFields = reactive([
  { value: "", type: "text", placeholder: "Pseudonim lub imię" },
  { value: "", type: "email", placeholder: "Email" },
  { value: "", type: "password", placeholder: "Hasło" },
  { value: "", type: "password", placeholder: "Powtórz hasło" },
]);

const error = ref("");
const loading = ref(false);
const termsAccepted = ref(false);

const formData = computed(() => {
  const nameField =
    registerFields.find((f) => f.placeholder === "Pseudonim lub imię")?.value ||
    "";
  const emailField =
    registerFields.find((f) => f.placeholder === "Email")?.value || "";
  const passwordField =
    registerFields.find((f) => f.placeholder === "Powtórz hasło")?.value || "";
  const repeatPasswordField =
    registerFields.find((f) => f.placeholder === "Hasło")?.value || "";
  return {
    email: emailField,
    password: passwordField,
    name: nameField,
    repeatPassword: repeatPasswordField,
  };
});

const handleRegister = async () => {
  loading.value = true;
  const { email, password, name, repeatPassword } = formData.value;
  error.value = "";
  if (!email || !password || !name) {
    error.value = "Wypełnij wszystkie pola";
    loading.value = false;
    return;
  }

  if (password !== repeatPassword) {
    error.value = "Hasła do siebie nie pasują";
    loading.value = false;
    return;
  }

  if (!termsAccepted.value) {
    error.value = "Musisz zaakceptować regulamin oraz politykę prywatności";
    return;
  }

  await register(email, password, name);
  loading.value = false;
};
const { register } = useAuth();
</script>

<style></style>
