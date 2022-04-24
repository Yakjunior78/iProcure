import axios from "axios";

export const fetch = (route: string, filters: any) => {
  return baseApiResource().get(route);
};

export const store = (route: string, data: any) => {
  return baseApiResource().post(route, data);
};

export const show = (route: string, id: string) => {
  return baseApiResource().get(route + "/" + id);
};

export const update = (route: string, id: string, data: any) => {
  return baseApiResource().put(route + "/" + id, data);
};

export const destroy = (route: string, id: string) => {
  return baseApiResource().delete(route + "/" + id);
};

const base_url = import.meta.env.VITE_API_URL;

function baseApiResource() {
  return axios.create({
    baseURL: base_url ? base_url.toString() : "",
    headers: {
      Authorization: "",
    },
  });
}
