
import { Platform } from 'react-native';
import { ip_address } from './config';

export const API_BASE = 'https://arezzo-cms.herokuapp.com/api';

export const getItems = async (path) => {
	try {
		let response = await fetch(
			`${API_BASE}/${path}`
		);
		let { items } = await response.json();
		return items;
	} catch (e) {
		return e;
	}
};
