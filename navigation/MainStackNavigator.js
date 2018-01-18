import { StackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import SightsScreen from '../screens/homescreens/SightsScreen';
import OutdoorsScreen from '../screens/homescreens/Outdoors';
import FoodScreen from '../screens/homescreens/FoodScreen';
import ShoppingScreen from '../screens/homescreens/ShoppingScreen';
import MoreScreen from '../screens/homescreens/MoreScreen';

const MainStackNavigator = StackNavigator({
	Home: {
		screen: HomeScreen
	},
	Sights: {
		screen: SightsScreen
	},
	Outdoors: {
		screen: OutdoorsScreen
	},
	Food: {
		screen: FoodScreen
	},
	Shopping: {
		screen: ShoppingScreen
	},
	More: {
		screen: MoreScreen
	}
});

export default MainStackNavigator;