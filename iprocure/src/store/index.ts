import { createStore } from "vuex";

import Getters from "./getters";
import Mutations from "./mutations";
import Actions from "./actions";
import createPersistedState from "vuex-persistedstate";

const strict = false;

const store = createStore({
  strict,
  
  plugins: [
    createPersistedState({
      paths: [
        'Getters',
        'Mutations',
        'Actions'
      ],
    }),
  ],
  
  modules: {
    Getters,
    Mutations,
    Actions,
  },
});

export default store;
