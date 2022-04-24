export const routeName = (route: any) => {
	
	const name = route ? route.replace(/-|\s/g, " ") : "";
	
	const n = name.charAt(0).toUpperCase() + name.slice(1);
	
	return n.replace(/_/g, " ");
}

export const formatDate = (dateString: string) => {
	
	if(!dateString) return '';
	
	return new Date(dateString).toLocaleDateString(
		'en-US',
		{
			year: "numeric",
			month: "short",
			day: "numeric"
		})
}
