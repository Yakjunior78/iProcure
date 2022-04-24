import { createRouter, createWebHistory } from "vue-router";

import { routesArray } from "@/utils/routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routesArray,
});

export default router;
