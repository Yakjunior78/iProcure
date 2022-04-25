const state = {
  authUser: {},
  isAuthenticated: false,
  submitting: false,
  errors: []
};

const getters = {
  authUser: (state: any) => state.authUser,
  isAuthenticated: (state: any) => state.isAuthenticated,
  submitting: (state: any) => state.submitting,
  errors: (state: any) => state.errors
};

export default {
  state,
  getters,
};
