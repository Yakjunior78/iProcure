<script>
import { mainMenu, footerMenu } from "@/utils/menu";

export default {
  computed: {
    mainMenus() {
      return mainMenu();
    },

    footerMenus() {
      return footerMenu();
    },

    activeRoute() {
      return this.$route.name;
    },
  },
};
</script>

<template>
  <section class="w-full h-full flex flex-col">
    <header class="w-full flex items-center justify-center py-5 px-4">
      <div class="w-full">
        <div
          class="rounded-sm p-1 flex items-center justify-center bg-gray-900"
        >
          <span class="font-bold text-xl text-gray-100 pt-1">Bi</span>
        </div>
      </div>
    </header>

    <main class="flex-grow h-64 w-full">
      <div
        class="h-full w-full flex flex-col items-center justify-center space-y-5"
      >
        <router-link
          v-for="(menu, key) in mainMenus"
          :key="key"
          :to="{ name: menu.to }"
        >
          <div
            class="text-gray-500 p-2 rounded-sm flex items-center justify-center hover:text-gray-200"
            :class="{ 'text-gray-200': activeRoute === menu.to }"
          >
            <span v-html="menu.svg"> </span>
          </div>
        </router-link>
      </div>
    </main>

    <footer>
      <div
        class="h-full w-full flex flex-col items-center justify-end space-y-10 py-10"
      >
        <router-link
          v-for="(menu, key) in footerMenus"
          :key="key"
          :to="{ name: menu.to }"
        >
          <div
            class="text-gray-300 p-2 rounded-sm flex items-center justify-center hover:text-gray-900"
            :class="{ 'text-gray-900': activeRoute === menu.to }"
          >
            <span v-html="menu.svg"> </span>
          </div>
        </router-link>
      </div>
    </footer>
  </section>
</template>
