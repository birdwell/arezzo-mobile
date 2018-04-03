import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Appregistry, Image } from 'react-native';

class EventDetails extends Component {
	static propTypes = {
		navigation: PropTypes.shape({
			state: PropTypes.shape({
				params: PropTypes.shape({
					title: PropTypes.string,
					description: PropTypes.string
				})
			})
		})
	};

	render() {
		const { title } = this.props.navigation.state.params;
		const { description } = this.props.navigation.state.params;
		let pic = {
		  uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
		};
		return (
			<View style={styles.container}>
				<Text style={styles.titleText}>{title}</Text>
				<Text style={styles.baseText}>{description}</Text>
		  		<Image source={pic} style={styles.canvas}/>
			</View>
		);
	}
	
}

var styles = StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor: '#F5FCFF',
	  position: 'relative'
	},
	canvas: {
	  position: 'absolute',
	  height: 150,
	  top: 0,
	  left: 0,
	  bottom: 0,
	  right: 0,
	},
	baseText: {
		fontSize:20,
		top: 180,
	  },
	titleText: {
		fontSize: 40,
		fontWeight: 'bold',
		top: 160,
	  },
  });
  

export default EventDetails;
