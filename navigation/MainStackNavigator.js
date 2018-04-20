import { StackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import EventDetails from '../screens/details/EventDetails';
import FoodDetails from '../screens/details/FoodDetails';
import ShoppingDetails from '../screens/details/ShoppingDetails';
import SightDetails from '../screens/details/SightDetails';
import OutdoorDetails from '../screens/details/OutdoorDetails';
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
	},
	ShoppingDetails: {
		screen: ShoppingDetails
	},
	SightDetails: {
		screen: ShoppingDetails
	},
	OutdoorDetails: {
		screen: ShoppingDetails
	}
});

export default MainStackNavigator;
