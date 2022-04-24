import { createRouter, createWebHistory } from "vue-router";

import { routesArray } from "@/utils/routes";
import middlewareHandler from "@/middlewares/handler";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routesArray,
});

router.beforeEach( async (to, from, next) => {
  middlewareHandler(to, from, next);
});

export default router;
