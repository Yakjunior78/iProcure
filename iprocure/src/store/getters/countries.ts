const state = {
  countries: [],
  country: {},
  fetching: false,
};

const getters = {
  countries: (state: any) => state.countries,
  country: (state: any) => state.country,
  fetching: (state: any) => state.fetching
};

export default {
  state,
  getters
};
