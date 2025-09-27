<template>
  <div class="max-w-xs">
    <!-- TOP NAV -->
    <div
      class="fixed top-0 left-0 bg-[#212121] w-full h-14 flex items-center z-50 shadow-xl"
    >
      <div class="container mx-auto flex justify-between px-4">
        <p class="text-white text-xl">InsideOutLife</p>
        <div class="relative">
          <div
            class="w-9 h-9 rounded-full bg-orange-400 flex items-center justify-center cursor-pointer"
            @click="showTopNav = !showTopNav"
          >
            {{ userData?.nick.slice(0, 2) }}
          </div>
          <div
            class="absolute w-[100px] bg-[#212121] right-0 text-white rounded shadow"
            v-if="showTopNav"
          >
            <NuxtLink to="/app/profile">
              <p class="cursor-pointer hover:bg-[#555555] px-2 py-2">Profil</p>
            </NuxtLink>
            <p
              class="cursor-pointer hover:bg-[#555555] px-2 py-2"
              @click="signOut"
            >
              Wyloguj się
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- NAV MOBILE -->
    <nav
      class="fixed bottom-0 left-1/2 -translate-x-1/2 z-50 w-full bg-[#111] py-2 shadow-xl lg:hidden"
    >
      <ul class="flex gap-3 justify-center text-2xl">
        <NuxtLink to="/app/dashboard">
          <li class="bg-[#262626] p-2 rounded shadow-lg">🏠</li>
        </NuxtLink>
        <NuxtLink to="/app/journal">
          <li class="bg-[#262626] p-2 rounded shadow-lg">📝</li>
        </NuxtLink>
        <NuxtLink to="/app/social">
          <li class="bg-[#262626] p-2 rounded shadow-lg">💬</li>
        </NuxtLink>

        <NuxtLink to="/articles">
          <li class="bg-[#262626] p-2 rounded shadow-lg">📚</li>
        </NuxtLink>

        <NuxtLink to="/profile">
          <li class="bg-[#262626] p-2 rounded shadow-lg">👤</li>
        </NuxtLink>
      </ul>
    </nav>

    <!-- NAV DESKTOP -->
    <nav
      class="hidden max-w-[250px] text-white p-2 bg-[#1C1C1C] rounded ml-10 w-full fixed lg:block xl:ml-40 2xl:ml-52"
    >
      <ul class="flex flex-col gap-4">
        <NuxtLink to="/app/dashboard">
          <li class="hover:bg-[#262626] p-2 rounded cursor-pointer">
            🏠 Dashboard
          </li>
        </NuxtLink>
        <NuxtLink to="/app/journal">
          <li class="hover:bg-[#262626] p-2 rounded cursor-pointer">
            📝 Dziennik emocji
          </li>
        </NuxtLink>
        <NuxtLink to="/app/social">
          <li class="hover:bg-[#262626] p-2 rounded cursor-pointer">
            💬 Społeczność
          </li>
        </NuxtLink>
        <NuxtLink to="/articles">
          <li class="hover:bg-[#262626] p-2 rounded cursor-pointer">
            📚 Artykuły
          </li>
        </NuxtLink>
        <NuxtLink to="/app/profile">
          <li class="hover:bg-[#262626] p-2 rounded cursor-pointer">
            👤 Profil
          </li>
        </NuxtLink>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts" setup>
const { signOut } = useAuth();
const { userData, getUser } = useUser();

onMounted(async () => await getUser());
const showTopNav = ref(false);
</script>
