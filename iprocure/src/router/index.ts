import { createRouter, createWebHistory } from "vue-router";

import { routesArray } from "@/utils/routes";
import store from "@/store";
import middlewarePipeline from "@/middlewares/middlewarePipeline";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routesArray,
});

router.beforeEach( (to, from, next) => {
  
  if (!to.meta.middleware) {
    return next();
  }
  
  const middleware = to.meta;
  
  console.log('MIDDLEWARE : ', middleware);
  
  const context = {
    to,
    from,
    next,
    store
  }
  
  next();
  //
  // return middleware[0]({
  //   ...context,
  //   next: middlewarePipeline(context, middleware, 1)
  // });
});

router.afterEach( (to) => {
  // store.commit('SHOW_MODULE_MENU', to.meta);
});

export default router;
