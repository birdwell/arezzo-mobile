import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import store from 'react-native-simple-store';
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
    this.getFavorites();
  }

  componentWillUnmount() {
    this._sub.remove();
  }

  getFavorites = async () => {
    try {
      const items = await store.get('favorites');
      this.setState({ items });
    } catch (error) {
      this.setState({ error });
    }
  }

  clearFavorites = () => {
    store.delete('favorites');
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
    paddingTop: 10,
    backgroundColor: '#fff',
  },
});