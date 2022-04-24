const state = {
  countries: {},
  fetching: false,
};

const getters = {
  countries: (state: any) => state.countries,
  fetching: (state: any) => state.fetching
};

export default {
  state,
  getters
};
