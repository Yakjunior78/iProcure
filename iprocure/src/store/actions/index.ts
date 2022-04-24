import {fetch, store} from "@/services/http.service";
import {mutate, politeResponse} from "@/helpers/vuex";

const index = {
    
    FETCH({commit, rootState}: { commit: any; rootState: any }, payload: any) {
        
        if (payload.loader) mutate(payload.loader, true, payload.module);
        
        fetch(payload.route, payload.filters)
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
        
        return store(payload.route, payload.form)
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
