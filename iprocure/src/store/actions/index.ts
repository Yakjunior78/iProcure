import { fetch } from "@/services/http.service";
import { mutate } from "@/helpers/vuex";

const index = {
	
	FETCH({ commit, rootState } : { commit: any, rootState: any }, payload: any ) {
		
		if(payload.loader) mutate(payload.loader, true, payload.module);
		
		fetch(payload.route, payload.filters)
			.then( ({ data }) => {
				if(payload.loader) mutate(payload.loader, false, payload.module);
				
				mutate(payload.state, data, payload.module);
				
			})
			.catch( () => {
				if(payload.loader) mutate(payload.loader, false, payload.module);
			})
	}
}

export default {
	actions: index
}
