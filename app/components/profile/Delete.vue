<template>
  <div class="mt-10">
    <p class="text-xl">W każdej chwili możesz usunąć swoje konto</p>
    <UseButton text="Usuń konto" @click="showModal = true" class="mt-4" />

    <div
      class="fixed top-0 left-0 w-full min-h-[100vh] bg-modal"
      v-if="showModal"
    >
      <div
        class="bg-[#212121] rounded max-w-xs w-full shadow-xl p-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:max-w-sm"
      >
        <p class="text-white">
          Czy na pewno chcesz usunąć swoje konto, a w raz z nim wszystkie dane,
          osiągnięcia, posty oraz komentarze?
        </p>
        <div class="flex gap-4 mt-4">
          <UseButton text="Anuluj" @click="showModal = false" />
          <UseButton text="Usuń konto!" @click="deleteAccount" :error="true" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const showModal = ref(false);
const supabase = useSupabaseClient();
const { deleteUser } = useAuth();
const { userData } = useUser();

async function deleteAccount() {
  try {
    await deleteUser(userData.value.id);
    const res = (await $fetch("/api/delete-user", { method: "POST" })) as {
      success?: boolean;
      error?: string;
    };

    if (res.success) {
      // wyloguj użytkownika po usunięciu konta
      await supabase.auth.signOut();
      navigateTo("/goodbye"); // np. przenieś na stronę pożegnalną

      showModal.value = false;
    }
  } catch (err: any) {
    console.error("Błąd przy usuwaniu konta:", err?.data?.statusMessage || err);
    alert("Nie udało się usunąć konta.");
  }
}
</script>

<style>
.bg-modal {
  background-color: rgba(0, 0, 0, 0.6);
}
</style>
