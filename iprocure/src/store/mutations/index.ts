const mutations = {
  MUTATE_STATE(state: string, payload: any) {
    payload.rootState[payload.state] = payload.data;
  },
};

export default {
  mutations
};
