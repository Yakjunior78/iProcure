import {dispatch, mutate} from "@/helpers/vuex";
import router from "@/router";

export class AuthService {
	
	static async login(form: any) {
		
		const res = await dispatch(
			'STORE',
			'',
			form,
			'auth',
			'auth/login',
			'submitting'
		);
		
		if (res.success) {
			this.handleLoggedIn(res.data);
		}
	}
	
	private static handleLoggedIn(data: any) {
		mutate('authUser', data.data, 'auth');
		mutate('isAuthenticated', true, 'auth');
		
		router.push({ name: 'home' });
	}
}
