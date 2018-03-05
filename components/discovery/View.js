import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Map from './map/Map';

class Discovery extends Component {
	static propTypes = {
		items: PropTypes.array
	}
	
	static defaultProps = {
		items: []
	}

	render() {
		const { items } = this.props;
		return (
			<Map items={items} />
		);
	}
}

export default Discovery;