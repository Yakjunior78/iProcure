import store from "@/store";
import { ElNotification } from 'element-plus'

export const mutate = (
    state: string,
    value: any,
    module: any
) => {
  store.commit("MUTATE_STATE", {
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
  return await store.dispatch(action, {
    state: state,
    form: data,
    module: module,
    route: route ? route : state,
    loader: loader ? loader : null,
  });
};

export const politeResponse = async (success: boolean, data: any) => { //TODO to be refactored to be able to handle all responses in different use cases
  notify(success ? 'Success' : 'Error', data.message, success ? 'success' : 'error');
  return { success, data };
}

const notify = (title: string, message: string, type:any) => {
  ElNotification({
    title: title,
    message: message,
    type: type
  })
}
