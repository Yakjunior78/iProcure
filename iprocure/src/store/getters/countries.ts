const state = {
  countries: {},
  fetchingCountries: false,
};

const getters = {
  countries: (state: any) => state.countries,
  fetchingCountries: (state: any) => state.fetchingCountries,
};

export default {
  state,
  getters
};
