import store from "@/store";
import isGuest from "@/middlewares/isGuest";
import middlewarePipeline from "@/middlewares/middlewarePipeline";
import isAuthenticated from "@/middlewares/isAuthenticated";
import isPermitted from "@/middlewares/isPermitted";
import router from "@/router";

function middlewareHandler (to: any, from: any, next: any) {
	
	if (!to.meta?.authScopes) {
		return router.push({name: 'login'});
	}
	
	const middleware = to.meta.authScopes;
	
	if (!(middleware instanceof Array)) {
		return router.push({name: 'login'});
	}
	
	const context = {
		to,
		from,
		next,
		store
	}
	
	if (middleware[0] === 'isGuest') {
		return isGuest({
			...context,
			next: middlewarePipeline(context, middleware, 1)
		});
	}
	
	if (middleware[0] === 'isAuthenticated') {
		
		return isAuthenticated({
			...context,
			next: middlewarePipeline(context, middleware, 1)
		});
	}
	
	if (middleware[0] === 'isPermitted') {
		
		return isPermitted({
			...context,
			next: middlewarePipeline(context, middleware, 1)
		});
	}
	
	return router.push({name: 'login'});
}

export default middlewareHandler;
