import {dispatch} from "@/helpers/vuex";

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
		console.log('DATA : ', data);
	}
}
