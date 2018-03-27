import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, AsyncStorage, Text, TouchableOpacity } from 'react-native';
import List from '../components/discovery/list/List';

export default class FavoritesScreen extends React.Component {
  static navigationOptions = {
    title: 'Favorites',
  };

  static propTypes = {
    navigation: PropTypes.shape({
      addListener: PropTypes.func.isRequired
    })
  }

  state = {
    items: [],
    error: null
  }

  componentDidMount() {
    this._sub = this.props.navigation.addListener(
      'didFocus',
      this.getFavorites
    );
  }

  componentWillUnmount() {
    this._sub.remove();
  }

  getFavorites = async () => {
    try {
      const rawItems = await AsyncStorage.getItem('@Favorites');
      if (rawItems !== null) {
        const items = JSON.parse(rawItems);
        this.setState({ items });
      }
    } catch (error) {
      this.setState({ error });
    }
  }

  clearFavorites = () => {
    AsyncStorage.clear((error) => { 
      if(error) {
        this.setState({ error });
      }
    });
  }

  render() {
    const { items, error } = this.state;
    
    return (
      <View style={styles.container}>
       {error && <Text>{ error }</Text>}
        <List items={items} favoriteAll />
        <TouchableOpacity onPress={this.clearFavorites}>
          <Text>Clear All Favorites</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});