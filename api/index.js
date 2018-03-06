
import { Platform } from 'react-native';

export const API_BASE = __DEV__ ? Platform.select({
	ios: 'https://127.0.0.1:5000',
	android: 'https://127.0.0.1:5000'
}) : 'https://arezzo-server.herokuapp.com';

export { getEvents } from './events-api';
export { getSights } from './events-api';
export { getFood } from './food-api';