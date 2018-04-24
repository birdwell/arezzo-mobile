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
        originalItems: [],
        refreshing: false,
        currentFilters: {
			wifi: false,
			accessibility: false,
			location: 0,
			price: 0,
			suggestedAge: 0
		}
    };

    onFilterChange = (name, value) => {

		this.setState(prevState => ({
			currentFilters: {
				...prevState.currentFilters,
				[name]: value
			}, 
		}), this.applyFilters);
		
	}

    applyFilters = () => {

		const {currentFilters, items, originalItems} = this.state;

        let newItemList = [];
        
        let filterNames = Object.keys(currentFilters);

        for(var i = 0; i<filterNames.length; i++)
        {
            for(var k = 0; k<originalItems.length; k++)
            {
                //if the filter type is a boolean
                if(currentFilters[filterNames[i]] === true || currentFilters[filterNames[i]] === false)
                {
                    if(currentFilters[filterNames[i]] === originalItems[k][filterNames[i]])
                    {
                        newItemList.push(originalItems[k]);
                    }
                }
            }

        }

        console.log(newItemList);

		this.setState({items: newItemList});

	}

    async componentDidMount() {
        this.setState({ loading: true });

        try {
            const getItems = getProp('getItems', this.props);
            const items = await getItems();
            const originalItems = items;
            this.setState({ items, loading: false, originalItems });
        } catch (error) {
            this.setState({ error: 'Unable to get items.', loading: false });
        }
    }

    onRefresh = async () => {
        try {
            this.setState({ refreshing: true });
            const getItems = getProp('getItems', this.props);
            const items = await getItems();
            const originalItems = items;
            this.setState({ items, refreshing: false,  originalItems});
        } catch (error) {
            this.setState({ error: 'Unable to get items.', refreshing: false });
        }
    }

    render() {
        const { items, loading, refreshing, currentFilters } = this.state;
        const { navigation: { navigate },  label} = this.props;
        const path = getProp('path', this.props);
        const title = getProp('label', this.props);
        
        return (
            <Discovery 
                items={items} 
                loading={loading} 
                navigate={navigate} 
                path={path} 
                onRefresh={this.onRefresh} 
                refreshing={refreshing}
                onFilterChange={this.onFilterChange}
                currentFilters={currentFilters}
                label={title}
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