
import { Platform } from 'react-native';
import { ip_address } from './config';

export const API_BASE = __DEV__ ? Platform.select({
	ios: `http://${ip_address}:3000/api`,
	android: `https://${ip_address}:3000/api`
}) : 'https://arezzo-cms.herokuapp.com/api';

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

