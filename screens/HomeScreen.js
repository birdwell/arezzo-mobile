import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  View,
  Image,
} from 'react-native';
import {
  MaterialCommunityIcons,
  FontAwesome,
  MaterialIcons
} from '@expo/vector-icons'; 
import PropTypes from 'prop-types';
import HomeIcon from './components/HomeIcon';
import { getItems } from '../api';
import Arezzo from '../assets/images/arezzo.png';

const HomeGrid = [
  {
    label: 'Sights',
    path: 'Sights',
    iconElement: <FontAwesome name="camera-retro" size={40} />,
    detailPath: 'SightDetails',
    getItems: () => getItems('sight')
  },
  {
    label: 'Events',
    path: 'Events',
    iconElement: <FontAwesome name="ticket" size={40} />,
    detailPath: 'EventDetails',
    getItems: () => getItems('event')
  },
  {
    label: 'Outdoors',
    path: 'Outdoors',
    iconElement: <MaterialCommunityIcons name="bike" size={40} />,
    detailPath: 'OutdoorDetails',
    getItems: () => getItems('outdoor')
  },
  {
    label: 'Food',
    path: 'Food',
    iconElement: <MaterialCommunityIcons name="food" size={40} />,
    detailPath: 'FoodDetails',
    getItems: () => getItems('food')
  },
  {
    label: 'Shopping',
    path: 'Shopping',
    iconElement: <FontAwesome name="shopping-cart" size={40} />,
    detailPath: 'ShoppingDetails',
    getItems: () => getItems('shopping')
  },
  {
    label: 'More',
    path: 'More',
    iconElement: <MaterialIcons name="more-horiz" size={40} />,
  }
];

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired
    }),
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={{ flex: 1, height: undefined, width: undefined, marginTop: 10 }} resizeMode="contain" source={Arezzo} /> 
        <View style={styles.homeGrid}>
          {
            HomeGrid.map(item => (
              <HomeIcon 
                key={item.path} 
                {...item}
                navigation={this.props.navigation}
                />
            ))
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  homeGrid: {
    flex: 2,
    marginTop: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
