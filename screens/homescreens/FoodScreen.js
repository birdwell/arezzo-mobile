import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StyleSheet, Text } from 'react-native';

import FoodItem from '../../components/list-items/FoodItem';
import { getFood } from '../../api';


export default class FoodScreen extends React.Component {
  static navigationOptions = {
    title: 'Food',
  };

  state = {
    items: []
  }

  componentWillMount() {
    getFood()
      .then(items => {
        this.setState({ items });
      })
      .catch(() => {
        this.setState({ error: 'Unable to get events.' });
      });
  }

  onPress = () => {

  }

  render() {
    const { items } = this.state;
    const { navigate } = this.props.navigation;

    return (
      <ScrollView style={styles.container}>
        <Text>Food</Text>
        {items.map((item) => (
            <FoodItem 
              key={item._id} 
              item={item} 
              onPress={() => navigate('FoodDetails', { item })}
            />
          )
        )}
      </ScrollView>
    );
  }
}

FoodScreen.propTypes = {
  navigation: {
    navigate: PropTypes.func.isRequired
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});