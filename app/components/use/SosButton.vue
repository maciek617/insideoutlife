<template>
  <div>
    <!-- SOS BUTTON -->
    <button
      type="button"
      aria-label="Otwórz pomoc SOS"
      class="flex items-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-600/30 cursor-pointer transition hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-xl active:translate-y-0"
      @click="openSos"
    >
      <span
        class="flex size-6 items-center justify-center rounded-full bg-white text-sm font-extrabold text-red-600"
      >
        !
      </span>

      SOS
    </button>

    <!-- MODAL -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="isOpen"
          class="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-3 backdrop-blur-sm sm:items-center sm:p-6"
          @click.self="closeModal"
        >
          <div
            class="relative w-full max-w-lg rounded-3xl bg-[#222] p-6 shadow-2xl sm:p-8"
          >
            <!-- CLOSE -->
            <button
              type="button"
              class="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-gray-100 text-xl text-gray-500 transition hover:bg-gray-200 hover:text-gray-900"
              @click="closeModal"
            >
              ×
            </button>

            <!-- ===================== -->
            <!-- MENU -->
            <!-- ===================== -->

            <template v-if="currentAction === null">
              <div
                class="mb-5 flex size-14 items-center justify-center rounded-full bg-red-100 text-2xl font-extrabold text-red-600"
              >
                !
              </div>

              <h2 class="text-2xl font-bold text-white">
                Zatrzymaj się na chwilę
              </h2>

              <p class="mt-2 text-sm leading-6 text-gray-200">
                Nie musisz teraz niczego rozwiązywać. Wybierz to, czego
                najbardziej potrzebujesz.
              </p>

              <div class="mt-6 space-y-2.5">
                <!-- ODDECH -->
                <button
                  type="button"
                  class="flex w-full items-center gap-4 rounded-2xl border border-red-200 bg-red-50 p-4 cursor-pointer text-left transition hover:bg-red-100"
                  @click="startAction('breathing')"
                >
                  <span class="text-2xl">🫁</span>

                  <span class="flex flex-col gap-0.5">
                    <strong class="text-sm font-semibold text-gray-900">
                      Potrzebuję się uspokoić
                    </strong>

                    <small class="text-xs text-gray-600">
                      2-minutowe ćwiczenie oddechowe
                    </small>
                  </span>
                </button>

                <!-- MYŚLI -->
                <button
                  type="button"
                  class="flex w-full items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 text-left transition cursor-pointer hover:bg-gray-100"
                  @click="startAction('thoughts')"
                >
                  <span class="text-2xl">🧠</span>

                  <span class="flex flex-col gap-0.5">
                    <strong class="text-sm font-semibold text-gray-900">
                      Nie mogę przestać myśleć
                    </strong>

                    <small class="text-xs text-gray-600">
                      Ćwiczenie na natłok myśli
                    </small>
                  </span>
                </button>

                <!-- WIADOMOŚĆ -->
                <button
                  type="button"
                  class="flex w-full items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 text-left transition cursor-pointer hover:bg-gray-100"
                  @click="startAction('message')"
                >
                  <span class="text-2xl">📱</span>

                  <span class="flex flex-col gap-0.5">
                    <strong class="text-sm font-semibold text-gray-900">
                      Mam impuls, żeby napisać
                    </strong>

                    <small class="text-xs text-gray-600">
                      Zatrzymaj impuls na 5 minut
                    </small>
                  </span>
                </button>

                <!-- DZIENNIK -->
                <button
                  type="button"
                  class="flex w-full items-center gap-4 rounded-2xl border border-gray-200 bg-red-100 p-4 text-left transition cursor-pointer hover:bg-red-200"
                  @click="startAction('write')"
                >
                  <span class="text-2xl">🆘</span>

                  <span class="flex flex-col gap-0.5">
                    <strong class="text-sm font-semibold text-gray-900">
                      Potrzebuje pomocy specjalistów
                    </strong>

                    <small class="text-xs text-gray-600">
                      Kliknij, gdy Twój stan psychiczny jest w złej kondycji
                    </small>
                  </span>
                </button>
              </div>

              <button
                type="button"
                class="mt-5 w-full py-2 text-sm text-gray-200 cursor-pointer hover:text-white"
                @click="closeModal"
              >
                Wrócę do tego później
              </button>
            </template>

            <!-- ===================== -->
            <!-- BREATHING -->
            <!-- ===================== -->

            <template v-else-if="currentAction === 'breathing'">
              <div class="text-center">
                <div
                  class="mx-auto flex size-20 items-center justify-center rounded-full bg-blue-50"
                >
                  <span
                    class="text-3xl transition-transform duration-[4000ms]"
                    :class="breathing ? 'scale-150' : 'scale-100'"
                  >
                    🫁
                  </span>
                </div>

                <h2 class="mt-6 text-2xl font-bold text-white">
                  Oddychaj spokojnie
                </h2>

                <p class="mt-2 text-sm text-gray-300">
                  Wdech przez 4 sekundy.<br />
                  Wydech przez 6 sekund.
                </p>

                <div class="mt-8 text-5xl font-bold text-white">
                  {{ breathingSeconds }}
                </div>

                <p class="mt-2 text-sm text-gray-400">
                  {{ breathing ? "Oddychaj..." : "Gotowy?" }}
                </p>

                <button
                  v-if="!breathing && breathingSeconds === 120"
                  type="button"
                  class="mt-8 w-full rounded-2xl bg-white px-5 py-4 font-semibold text-gray-900 transition cursor-pointer hover:bg-blue-400 hover:text-white"
                  @click="startBreathing"
                >
                  Zacznij
                </button>

                <button
                  v-else-if="!breathing"
                  type="button"
                  class="mt-8 w-full rounded-2xl bg-white px-5 py-4 font-semibold cursor-pointer text-gray-900 hover:bg-blue-400 hover:text-white"
                  @click="startBreathing"
                >
                  Jeszcze raz
                </button>

                <button
                  type="button"
                  class="mt-3 w-full py-2 text-sm text-gray-200 cursor-pointer"
                  @click="goBack"
                >
                  ← Wróć
                </button>
              </div>
            </template>

            <!-- ===================== -->
            <!-- THOUGHTS -->
            <!-- ===================== -->

            <template v-else-if="currentAction === 'thoughts'">
              <div>
                <div
                  class="flex size-14 items-center justify-center rounded-full bg-purple-100 text-2xl"
                >
                  🧠
                </div>

                <h2 class="mt-5 text-2xl font-bold text-white">
                  Wróć do tego, co jest teraz
                </h2>

                <p class="mt-2 text-sm leading-6 text-gray-200">
                  Rozejrzyj się i nazwij:
                </p>

                <div class="mt-5 space-y-3">
                  <div class="rounded-xl bg-gray-200 p-4">
                    👀 <strong>5 rzeczy</strong>, które widzisz
                  </div>

                  <div class="rounded-xl bg-gray-200 p-4">
                    👂 <strong>4 dźwięki</strong>, które słyszysz
                  </div>

                  <div class="rounded-xl bg-gray-200 p-4">
                    ✋ <strong>3 rzeczy</strong>, których możesz dotknąć
                  </div>

                  <div class="rounded-xl bg-gray-200 p-4">
                    👃 <strong>2 zapachy</strong>, które czujesz
                  </div>

                  <div class="rounded-xl bg-gray-200 p-4">
                    👅 <strong>1 rzecz</strong>, którą możesz posmakować
                  </div>
                </div>

                <button
                  type="button"
                  class="mt-6 w-full rounded-2xl bg-white px-5 py-4 font-semibold text-gray-900 cursor-pointer hover:bg-blue-400 hover:text-white"
                  @click="closeModal"
                >
                  Zrobione, czuje się lepiej
                </button>
              </div>
            </template>

            <!-- ===================== -->
            <!-- MESSAGE -->
            <!-- ===================== -->

            <template v-else-if="currentAction === 'message'">
              <div class="text-center">
                <div
                  class="mx-auto flex size-16 items-center justify-center rounded-full bg-orange-100 text-3xl"
                >
                  📱
                </div>

                <h2 class="mt-5 text-2xl font-bold text-white">
                  Nie wysyłaj jeszcze
                </h2>

                <p class="mt-2 text-sm leading-6 text-gray-200">
                  Daj sobie 5 minut. Nie musisz teraz podejmować żadnej decyzji.
                </p>

                <div class="mt-8 text-5xl font-bold tabular-nums text-white">
                  {{ messageSeconds }}
                </div>

                <p class="mt-2 text-sm text-gray-300">
                  Zostań tutaj przez chwilę.
                </p>

                <button
                  v-if="!messageRunning"
                  type="button"
                  class="mt-8 w-full rounded-2xl bg-white px-5 py-4 font-semibold text-gray-900 cursor-pointer hover:bg-blue-400 hover:text-white"
                  @click="startMessageTimer"
                >
                  Daj mi 5 minut
                </button>

                <button
                  v-else
                  type="button"
                  class="mt-8 w-full rounded-2xl bg-green-600 px-5 py-4 font-semibold text-white cursor-pointer"
                  @click="finishMessageTimer"
                >
                  Czuję się lepiej
                </button>

                <button
                  type="button"
                  class="mt-3 w-full py-2 text-sm text-gray-500"
                  @click="goBack"
                >
                  ← Wróć
                </button>
              </div>
            </template>

            <!-- ===================== -->
            <!-- SOS -->
            <!-- ===================== -->

            <template v-else-if="currentAction === 'write'">
              <div>
                <div
                  class="flex size-14 items-center justify-center rounded-full bg-green-100 text-2xl"
                >
                  🆘
                </div>

                <h2 class="mt-5 text-2xl font-bold text-white">
                  Daj sobie pomóc
                </h2>

                <p class="mt-2 text-sm leading-6 text-gray-200">
                  Pamiętaj, że proszenie o pomoc jest męskie. To żaden wstyd!
                </p>

                <button
                  type="button"
                  class="flex w-full items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 text-left transition mt-5 cursor-pointer hover:bg-blue-100"
                  @click="openSearch('psycholog w pobliżu')"
                >
                  <span class="text-2xl">🧑‍⚕️</span>

                  <span class="flex flex-col gap-0.5">
                    <strong class="text-sm font-semibold text-gray-900">
                      Potrzebuję rozmowy ze specjalistą
                    </strong>

                    <small class="text-xs text-gray-500">
                      Znajdź psychologa w swojej okolicy
                    </small>
                  </span>
                </button>

                <button
                  type="button"
                  class="flex w-full items-center gap-4 rounded-2xl border border-red-200 bg-red-50 p-4 text-left transition cursor-pointer mt-5 hover:bg-red-100"
                  @click="openSearch('szpital')"
                >
                  <span class="text-2xl">🏥</span>

                  <span class="flex flex-col gap-0.5">
                    <strong class="text-sm font-semibold text-red-900">
                      Potrzebuję pilnej pomocy
                    </strong>

                    <small class="text-xs text-red-700">
                      Znajdź najbliższy szpital
                    </small>
                  </span>
                </button>

                <button
                  type="button"
                  class="mt-3 w-full py-2 text-sm text-gray-200"
                  @click="goBack"
                >
                  ← Wróć
                </button>
              </div>
            </template>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
type Action = "breathing" | "thoughts" | "message" | "write";

const isOpen = ref(false);
const currentAction = ref<Action | null>(null);

const thought = ref("");

const breathing = ref(false);
const breathingSeconds = ref(0);
let breathingInterval: ReturnType<typeof setInterval> | null = null;

const messageRunning = ref(false);
const messageSeconds = ref(300);
let messageInterval: ReturnType<typeof setInterval> | null = null;

// -------------------------
// MODAL
// -------------------------

const openSos = () => {
  isOpen.value = true;
  currentAction.value = null;
};

const closeModal = () => {
  isOpen.value = false;

  stopBreathing();
  stopMessageTimer();

  currentAction.value = null;
};

const goBack = () => {
  stopBreathing();
  stopMessageTimer();

  currentAction.value = null;
};

// -------------------------
// ACTIONS
// -------------------------

const startAction = (action: Action) => {
  currentAction.value = action;

  if (action === "breathing") {
    breathingSeconds.value = 120;
  }

  if (action === "message") {
    messageSeconds.value = 300;
  }
};

// -------------------------
// BREATHING
// -------------------------

const startBreathing = () => {
  if (breathingInterval) return;
  startAction("breathing");
  breathing.value = true;

  breathingInterval = setInterval(() => {
    if (breathingSeconds.value <= 1) {
      stopBreathing();
      breathingSeconds.value = 0;
      return;
    }

    breathingSeconds.value--;
  }, 1000);
};

const stopBreathing = () => {
  breathing.value = false;

  if (breathingInterval) {
    clearInterval(breathingInterval);
    breathingInterval = null;
  }
};

// -------------------------
// MESSAGE TIMER
// -------------------------

const startMessageTimer = () => {
  if (messageInterval) return;
  startAction("message");
  messageRunning.value = true;

  messageInterval = setInterval(() => {
    if (messageSeconds.value <= 1) {
      stopMessageTimer();
      messageSeconds.value = 0;
      return;
    }

    messageSeconds.value--;
  }, 1000);
};

const stopMessageTimer = () => {
  messageRunning.value = false;

  if (messageInterval) {
    clearInterval(messageInterval);
    messageInterval = null;
  }
};

const finishMessageTimer = () => {
  stopMessageTimer();
  closeModal();
};

// -------------------------
// SOS
// -------------------------
const openSearch = (term: string) => {
  const query = encodeURIComponent(term);

  window.open(
    `https://www.google.com/search?q=${query}`,
    "_blank",
    "noopener,noreferrer",
  );
};
// -------------------------
// ESC
// -------------------------

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === "Escape") {
    closeModal();
  }
};

// -------------------------
// CLEANUP
// -------------------------

onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeydown);

  stopBreathing();
  stopMessageTimer();
});
</script>
