import axios from "axios";
import store from "@/store";

const base_url = import.meta.env.VITE_API_URL;

export class HttpService {
  
  api;
  
  constructor() {
    
    const token = store.getters.authUser.token;
    
    this.api = axios.create({
      baseURL: base_url ? base_url.toString() : "",
      headers: {
        Authorization: token ? "Bearer " + token : "",
      },
    });
  }
  
  fetch(route: string, filters: any) {
    return this.api.get(route);
  }
  
  store(route: string, data: any) {
    return this.api.post(route, data);
  }
  
  show(route: string, id: string) {
    return this.api.get(route + "/" + id);
  }
  
  update(route: string, id: string, data: any) {
    return this.api.put(route + "/" + id, data);
  }
  
  destroy(route: string, id: string) {
    return this.api.delete(route + "/" + id);
  }
}
