<template>
  <div class="flex flex-col justify-center items-center mt-10 lg:mt-16">
    <p class="font-bold text-2xl">Wyślij wiadomość</p>

    <form class="max-w-lg w-full mx-auto" @submit.prevent="submitForm">
      <div class="relative mt-5">
        <input
          type="text"
          id="name"
          class="peer block w-full border-b-2 border-gray-300 focus:border-orange-400 outline-none max-w-lg"
          placeholder=" "
          autocomplete="additional-name"
          v-model="formData.name"
        />
        <label
          for="name"
          class="absolute left-0 top-0 transition-all peer-focus:top-[-20px] peer-focus:text-sm peer-placeholder-shown:-top-1 peer-placeholder-shown:text-base peer-not-placeholder-shown:top-[-20px] peer-not-placeholder-shown:text-base"
        >
          Imię
        </label>
        <p v-if="errors.name" class="mt-2 text-red-400">{{ errors.name }}</p>
      </div>
      <div class="relative mt-10">
        <input
          type="text"
          id="email"
          class="peer block w-full border-b-2 border-gray-300 focus:border-orange-400 outline-none max-w-lg"
          placeholder=" "
          autocomplete="email"
          v-model="formData.email"
        />
        <label
          for="email"
          class="absolute left-0 top-0 transition-all peer-focus:top-[-20px] peer-focus:text-sm peer-placeholder-shown:-top-1 peer-placeholder-shown:text-base peer-not-placeholder-shown:top-[-20px] peer-not-placeholder-shown:text-base"
        >
          E-mail
        </label>
        <p v-if="errors.email" class="mt-2 text-red-400">{{ errors.email }}</p>
      </div>
      <div class="relative mt-10">
        <textarea
          type="text"
          id="msg"
          class="peer block w-full border-b-2 border-gray-300 min-h-40 focus:border-orange-400 outline-none max-w-lg"
          placeholder=" "
          v-model="formData.msg"
        ></textarea>
        <label
          for="msg"
          class="absolute left-0 top-0 transition-all peer-focus:top-[-20px] peer-focus:text-sm peer-placeholder-shown:-top-1 peer-placeholder-shown:text-base peer-not-placeholder-shown:top-[-20px] peer-not-placeholder-shown:text-base"
        >
          Wiadomość
        </label>
        <p v-if="errors.msg" class="mt-2 text-red-400">{{ errors.msg }}</p>
      </div>
      <label class="flex items-center gap-2 cursor-pointer select-none mt-4">
        <input
          type="checkbox"
          class="peer appearance-none w-5 h-5 border-2 border-gray-400 rounded-md transition checked:bg-orange-400 checked:border-bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-300"
          v-model="formData.check"
        />
        <span class="text-gray-700 peer-checked:text-orange-600 transition">
          Zgoda na przetwarzanie danych osobowych
        </span>
      </label>
      <p v-if="errors.check" class="mt-2 text-red-400">{{ errors.check }}</p>
      <UseButton text="Wyślij" class="mt-4" />
      <p class="mt-4 text-green-400" v-if="msgSent">
        Wiadomość została wysłana
      </p>
    </form>
  </div>
</template>

<script lang="ts" setup>
const sentAttempt = ref(false);
const { sendMessage, msgSent } = useMessages();

const formData = reactive({
  name: "",
  email: "",
  msg: "",
  check: false || "",
});

const errors = reactive({
  name: "",
  email: "",
  msg: "",
  check: "",
});

const validateForm = () => {
  sentAttempt.value = true;

  // Kasujemy stare błędy
  Object.keys(errors).forEach(
    (key) => (errors[key as keyof typeof errors] = "")
  );

  // Name
  if (!formData.name.trim()) {
    errors.name = "Imię jest wymagane";
  }

  // Email
  if (!formData.email.trim()) {
    errors.email = "Email jest wymagany";
  } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
    errors.email = "Nieprawidłowy format email";
  }

  // Message
  if (!formData.msg.trim()) {
    errors.msg = "Wiadomość jest wymagana";
  }

  // Checkbox
  if (!formData.check) {
    errors.check = "Musisz zaakceptować zgodę";
  }

  // Zwracamy info czy wszystko ok
  return !Object.values(errors).some((err) => err !== "");
};

const submitForm = async () => {
  const ok = validateForm();
  if (!ok) return;

  await sendMessage(formData.name, formData.email, formData.msg);

  if (!msgSent.value) return;

  sentAttempt.value = false;
  // Wyczyszczenie pól formularza
  Object.keys(formData).forEach(
    (key) => (formData[key as keyof typeof formData] = "")
  );
};

watch(formData, () => (sentAttempt.value ? validateForm() : null), {
  deep: true,
});

//TODO:
// [ ] Ciekawy modal po wysłaniu wiadomości z informacją kiedy dostanie odpowiedź na pytanie
</script>

<style></style>
