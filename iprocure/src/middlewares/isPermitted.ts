export default function isPermitted ({ to, next, store }) {
	
	const isAuthenticated = store.getters.isAuthenticated;
	
	if (to.name !== 'login' && !isAuthenticated) {
		next({ name: 'login' });
	} else {
		next();
	}
}
