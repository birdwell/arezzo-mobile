// import { API_BASE } from './index';

export const getFood = async () => {
	try {

		let response = await fetch(
			`https://arezzo-server.herokuapp.com/foods`
		);
		let food = await response.json();
		return food;
	} catch (e) {
		return Promise.reject(e);
	}
};
