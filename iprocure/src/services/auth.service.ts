import {dispatch, mutate} from "@/helpers/vuex";
import router from "@/router";
import store from "@/store";

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
			return this.handleLoggedIn(res.data);
		}
		
		return mutate('errors', res.data.errors, 'auth');
	}
	
	static async update(form: any) {
		
		return await dispatch(
			'STORE',
			'',
			form,
			'auth',
			'auth/update-profile',
			'submitting'
		);
	}
	
	private static handleLoggedIn(data: any) {
		mutate('authUser', data.data, 'auth');
		mutate('isAuthenticated', true, 'auth');
		
		router.push({ name: 'home' });
	}
	
	static isPermitted(permissions: string) {
		
		const user = store.getters.authUser?.user;
		
		if(!user) return false;
		
		return !!user.permissions.some((perm: string) => permissions.includes(perm));
	}
}
