import store from "@/store";

export const mutate = async (
    state: string,
    value: any,
    module: any
) => {
  await store.commit("MUTATE_STATE", {
    state: state,
    data: value,
    rootState: store.state.Getters[module],
  });
};

export const dispatch = async (
  action: string,
  state: string,
  data: any,
  module: string,
  route: string,
  loader: any
) => {
  await store.dispatch(action, {
    state: state,
    form: data,
    module: module,
    route: route ? route : state,
    loader: loader ? loader : null,
  });
};
