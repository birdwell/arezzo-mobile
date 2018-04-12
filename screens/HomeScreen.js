import React from 'react';
import {
  View,
  Image,
  Dimensions
} from 'react-native';
import {
  MaterialCommunityIcons,
  FontAwesome,
  MaterialIcons
} from '@expo/vector-icons';
import PropTypes from 'prop-types';
import Carousel from 'react-native-snap-carousel';

import HomeIcon from './components/HomeIcon';
import { getItems } from '../api';
import Arezzo from '../assets/images/arezzo.png';
import styles from './HomeScreenStyle';
import SliderEntry from './components/SliderEntry';

const { width: viewportWidth } = Dimensions.get('window');

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);
const sliderWidth = viewportWidth;
const itemWidth = slideWidth + itemHorizontalMargin * 2;

const HomeGrid = [
  {
    label: 'Sights',
    path: 'Place',
    iconElement: <FontAwesome name="camera-retro" size={40} />,
    detailPath: 'SightDetails',
    getItems: () => getItems('sight')
  },
  {
    label: 'Events',
    path: 'Place',
    iconElement: <FontAwesome name="ticket" size={40} />,
    detailPath: 'EventDetails',
    getItems: () => getItems('event')
  },
  {
    label: 'Outdoors',
    path: 'Place',
    iconElement: <MaterialCommunityIcons name="bike" size={40} />,
    detailPath: 'OutdoorDetails',
    getItems: () => getItems('outdoors')
  },
  {
    label: 'Food',
    path: 'Place',
    iconElement: <MaterialCommunityIcons name="food" size={40} />,
    detailPath: 'FoodDetails',
    getItems: () => getItems('food')
  },
  {
    label: 'Shopping',
    path: 'Place',
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

  state = {
    items: []
  }

  

  componentDidMount = async () => {
    const items = await getItems('event');
    this.setState({ 
      items: items.slice(0,5)
    });
  } 

  _renderItem({ item, index }, parallaxProps) {
    return <SliderEntry path="EventDetails" item={item} even={(index + 1) % 2 === 0} parallax parallaxProps={parallaxProps} />;
  }

  render() {
    const dimensions = Dimensions.get('window');
    const imageHeight = Math.round(dimensions.width * 8 / 16);
    const imageWidth = dimensions.width;

    return (
      <View style={{ flex: 1 }}>
        <Image style={{ height: imageHeight, width: imageWidth }} resizeMode="cover" source={Arezzo} />
        <View style={styles.container}>
          <View style={styles.homeGrid}>
            {
              HomeGrid.slice(0,3).map(item => (
                <HomeIcon
                  key={item.label}
                  {...item}
                  navigation={this.props.navigation}
                />
              ))
            }
          </View>
          <View style={styles.homeGrid}>
            {
              HomeGrid.slice(3,6).map(item => (
                <HomeIcon
                  key={item.label}
                  {...item}
                  navigation={this.props.navigation}
                />
              ))
            }
          </View>
          <View style={styles.carouselContainer}>
            <Carousel
              data={this.state.items}
              renderItem={this._renderItem}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              hasParallaxImages
              containerCustomStyle={styles.slider}
              contentContainerCustomStyle={styles.sliderContentContainer}
              layout={'default'}
              loop={true}
            />
          </View>
        </View>
      </View>
    );
  }
}
