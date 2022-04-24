import type {RouteRecordName} from "vue-router";

export const routeName = (route: RouteRecordName) => {
	
	const name = route ? route.replace(/-|\s/g, " ") : "";
	
	const n = name.charAt(0).toUpperCase() + name.slice(1);
	
	return n.replace(/_/g, " ");
}
