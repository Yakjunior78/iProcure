const state = {
  authUser: {},
  isAuthenticated: false,
  submitting: false
};

const getters = {
  authUser: (state: any) => state.authUser,
  isAuthenticated: (state: any) => state.isAuthenticated,
  submitting: (state: any) => state.submitting
};

export default {
  state,
  getters,
};
