import {
  createRouter,
  createWebHistory
} from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import("../pages/auth/login.vue"),
    },
    {
      path: "/register",
      name: "login",
      component: () => import("../pages/auth/register.vue"),
    },
    {
      path: "/",
      name: "home",
      component: () => import("../pages/index.vue"),
    },
    {
      path: "/profile",
      name: "about",
      component: () => import("../pages/profile/index.vue"),
    },
  ],
});

export default router;
