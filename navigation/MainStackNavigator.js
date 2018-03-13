import { StackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import EventDetails from '../screens/details/EventDetails';
import FoodDetails from '../screens/details/FoodDetails';
import PlaceScreen from '../screens/PlaceScreen';
import MoreScreen from '../screens/MoreScreen';

const MainStackNavigator = StackNavigator({
	Home: {
		screen: HomeScreen
	},
	Place: {
		screen: PlaceScreen
	},
	More: {
		screen: MoreScreen
	},
	EventDetails: {
		screen: EventDetails
	},
	FoodDetails: {
		screen: FoodDetails
	}
});

export default MainStackNavigator;
