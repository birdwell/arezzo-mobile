
import { Platform } from 'react-native';
import { ip_address } from './config';

export const API_BASE = 'https://arezzo-cms.herokuapp.com/api';

export const getItems = async (path) => {
	try {
		debugger;
		let response = await fetch(
			`${API_BASE}/${path}`
		);
		debugger;
		let { items } = await response.json();
		debugger;
		return items;
	} catch (e) {
		debugger;
		return e;
	}
};
