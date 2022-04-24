import {mutate, politeResponse} from "@/helpers/vuex";
import {HttpService} from "@/services/http.service";

const index = {
    
    FETCH({commit, rootState}: { commit: any; rootState: any }, payload: any) {
        
        if (payload.loader) mutate(payload.loader, true, payload.module);
        
        (new HttpService())
            .fetch(payload.route, payload.filters)
            .then(({data}) => {
                if (payload.loader) mutate(payload.loader, false, payload.module);
                mutate(payload.state, data, payload.module);
            })
            .catch(() => {
                if (payload.loader) mutate(payload.loader, false, payload.module);
                //TODO handle error globally here
            });
    },
    
    STORE({ commit, rootState }: { commit: any; rootState: any }, payload: any) {
        
        if (payload.loader) mutate(payload.loader, true, payload.module);
        
        return (new HttpService())
            .store(payload.route, payload.form)
            .then( async ({ data }) => {
                if (payload.loader) mutate(payload.loader, false, payload.module);
                return await politeResponse(true, data);
            })
            .catch( async (error) => {
                if (payload.loader) mutate(payload.loader, false, payload.module);
                return await politeResponse(false, error);
            });
    }
};

export default {
  actions: index,
};
