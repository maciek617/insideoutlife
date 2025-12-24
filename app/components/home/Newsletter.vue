<template>
  <div>
    <div class="text-center mt-20">
      <div class="max-w-4xl mx-auto">
        <p class="text-4xl font-bold lg:text-5xl xl:text-6xl 2xl:text-7xl">
          Wsparcie prosto do
          <span
            class="bg-clip-text text-transparent bg-gradient-to-r from-[#F14D5C] to-[#FDC70C]"
            >Twojej</span
          >
          skrzynki pocztowej
        </p>
        <p
          class="mt-4 text-gray-300 max-w-xl mx-auto font-thin lg:mt-6 lg:text-lg 2xl:text-xl"
        >
          Raz w tygodniu otrzymasz inspiracje i konkretne kroki, które pomogą Ci
          stanąć na nogi po zdradzie.
        </p>
      </div>
    </div>

    <div class="relative flex items-center justify-center mt-10">
      <div
        class="absolute mt-2 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 max-w-sm w-full z-10 h-8 bg-gradient-to-r from-[#F14D5C] to-[#FDC70C] blur-3xl"
      ></div>
      <div
        class="border border-gray-500 py-2 px-6 rounded-full flex items-center gap-2 md:gap-10 md:px-6 lg:px-10 xl:gap-14"
      >
        <div class="flex flex-col relative z-10">
          <label>Adres e-mail</label>
          <input
            v-model="email"
            type="text"
            placeholder="Wpisz twój adres e-mail"
            class="outline-0 py-2"
          />
        </div>
        <UseButton text="Dołącz" @click="handleSubmit" />
      </div>
    </div>

    <p v-if="emailError" class="text-center text-red-500 text-sm mt-4">
      {{ emailError }}
    </p>
    <p v-if="emailExists" class="text-center text-red-500 text-sm mt-4">
      Email już jest w bazie danych.
    </p>
    <p v-if="emailAdded" class="text-center text-green-400 text-sm mt-4">
      Adres e-mail został dodany do newslettera, od teraz co tydzień na Twojej
      skrzynce będą dodatkowe materiały!
    </p>

    <p class="text-gray-500 text-center text-sm mt-2">
      *Dołączając wyrażasz zgodę na przetwarzanie danych osobowych takich jak
      adres e-mail.
    </p>
  </div>
</template>

<script lang="ts" setup>
import { validateEmail } from "~/helpers/validateEmail";
import { useNewsletter } from "#imports";
const {
  checkIfEmailExists,
  addEmailToNewsletterBase,
  emailExists,
  emailAdded,
} = useNewsletter();

const email = ref("");
const emailError = ref("");

const handleSubmit = async () => {
  emailError.value = validateEmail(email.value);

  if (!emailError.value) {
    await checkIfEmailExists(email.value);

    if (!emailExists.value) {
      // update bazy danych
      await addEmailToNewsletterBase(email.value);
      email.value = "";
    }
  }
};
</script>

<style></style>
