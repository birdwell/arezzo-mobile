import { StackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import EventDetails from '../screens/details/EventDetails';
import FoodDetails from '../screens/details/FoodDetails';
import PlaceScreen from '../screens/PlaceScreen';

const MainStackNavigator = StackNavigator({
	Home: {
		screen: HomeScreen
	},
	Place: {
		screen: PlaceScreen
	},
	EventDetails: {
		screen: EventDetails
	},
	FoodDetails: {
		screen: FoodDetails
	}
});

export default MainStackNavigator;