const state = {
  authUser: {},
  isAuthenticated: false,
};

const getters = {
  authUser: (state: any) => state.authUser,
  isAuthenticated: (state: any) => state.isAuthenticated,
};

export default {
  state,
  getters,
};
