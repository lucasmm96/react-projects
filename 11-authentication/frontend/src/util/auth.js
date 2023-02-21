export function getAuthToken() {
	return localStorage.getItem('token');
}

export function loader() {
	return getAuthToken();
}
