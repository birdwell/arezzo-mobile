import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import SettingsScreen from '../screens/SettingsScreen';
import ItineraryScreen from '../screens/ItineraryScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import MainStackNavigator from './MainStackNavigator';

export default TabNavigator(
  {
    Home: {
      screen: MainStackNavigator,
      navigationOptions: { header: null }
    },
    Itinerary: {
      screen: ItineraryScreen
    },
    Favorites: {
      screen: FavoritesScreen
    },
    Settings: {
      screen: SettingsScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName =
              Platform.OS === 'ios'
                ? `ios-home${focused ? '' : '-outline'}`
                : 'md-information-circle';
            break;
          case 'Itinerary':
            iconName =
              Platform.OS === 'ios'
              ? `ios-calendar${focused ? '' : '-outline'}`
              : 'md-calendar';
            break;
          case 'Favorites':
            iconName =
              Platform.OS === 'ios'
              ? `ios-heart${focused ? '' : '-outline'}`
              : 'md-heart';
            break;
          case 'Links':
            iconName = Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link';
            break;
          case 'Settings':
            iconName =
              Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options';
        }
        return (
          <Ionicons
            name={iconName}
            size={30}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarOptions: {
      showLabel: false,
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
