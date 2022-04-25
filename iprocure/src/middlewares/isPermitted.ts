import {AuthService} from "@/services/auth.service";

export default function isPermitted (ctx: any) {
	
	const isAuthenticated = ctx.store.getters.isAuthenticated;
	
	if (ctx.to.name !== 'login' && !isAuthenticated) {
		ctx.next({ name: 'login' });
	}
	
	if(!ctx.to.meta.permissions.length) {
		ctx.next();
	}
	
	if(!AuthService.isPermitted(ctx.to.meta.permissions)) {
		ctx.next({ name: 'login' });
	}
	
	ctx.next();
}
