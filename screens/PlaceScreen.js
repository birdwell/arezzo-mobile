import React from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import Discovery from '../components/discovery/View';
import { getProp } from '../utils';


class PlaceScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.title
    });

    state = {
        items: [],
        loading: false,
        refreshing: false
    };

    async componentDidMount() {
        this.setState({ loading: true });

        try {
            const getItems = getProp('getItems', this.props);
            const items = await getItems();
            this.setState({ items, loading: false });
        } catch (error) {
            this.setState({ error: 'Unable to get items.', loading: false });
        }
    }

    onRefresh = async () => {
        try {
            this.setState({ refreshing: true });
            const getItems = getProp('getItems', this.props);
            const items = await getItems();
            this.setState({ items, refreshing: false  });
        } catch (error) {
            this.setState({ error: 'Unable to get items.', refreshing: false });
        }
    }

    render() {
        const { items, loading, refreshing } = this.state;
        const { navigation: { navigate } } = this.props;
        const path = getProp('path', this.props);

        return (
            <Discovery 
                items={items} 
                loading={loading} 
                navigate={navigate} 
                path={path} 
                onRefresh={this.onRefresh} 
                refreshing={refreshing}
            />
        );
    }
}

PlaceScreen.propTypes = {
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired
	})
};

export default withNavigation(PlaceScreen);