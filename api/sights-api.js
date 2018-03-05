export const getSights = async () => {
	try {
		const response = await fetch(`https://arezzo-server.herokuapp.com/sights`);
		const sights = await response.json();
		return sights;
	} catch (e) {
		return Promise.reject(e);
	}
};
