// import { API_BASE } from './index';

export const getEvents = async () => {
	try {

		let response = await fetch(
			`https://arezzo-server.herokuapp.com/events`
		);
		let events = await response.json();
		return events;
	} catch (e) {
		return Promise.reject(e);
	}
};
