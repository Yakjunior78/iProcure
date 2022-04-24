import {createStore} from "vuex";

import Getters from './getters';
import Mutations from './mutations';
import Actions from './actions';

const strict = false;

const store = createStore({

    strict,

    modules: {
        Getters,
        Mutations,
        Actions
    }
});

export default store;
