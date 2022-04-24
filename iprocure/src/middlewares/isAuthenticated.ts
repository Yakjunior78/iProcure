export default function isAuthenticated (x: any) {
	
	const isAuthenticated = x.store.getters.isAuthenticated;
	
	if (x.to.name !== 'login' && !isAuthenticated) {
		x.next({ name: 'login' });
	} else {
		x.next();
	}
}
