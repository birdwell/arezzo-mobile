import React from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import Discovery from '../components/discovery/View';
import { getProp } from '../utils';

/*
For timeSlot:
0=all day
1=morning
2=afternoon
3=evening
*/


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
            timeSlot: 0,
            isIndoor: false

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

        console.log(originalItems);
        var addItem = true;

        const title = getProp('label', this.props);


        for(var i = 0; i<originalItems.length; i++)
        {
            if(currentFilters.wifi)
            {
                if(!originalItems[i].wifi)
                {
                    addItem = false;
                }
            }

            if(currentFilters.accessibility)
            {
                if(!originalItems[i].accessibility)
                {
                    addItem = false;
                }
            }

            if(title === 'Sights')
            {
                if(currentFilters.isIndoor)
                {
                    if(!originalItems[i].isIndoor)
                    {
                        addItem = false;
                    }
                }
            }

            if(title === 'Events')
            {
                if(currentFilters.timeSlot !== 0)
                {
                    var startDate = new Date(originalItems[i].startDate);
                    var endDate = new Date(originalItems[i].endDate);

                    console.log(`${startDate.toTimeString()}   ${endDate.toTimeString()}`);
                    var startHours = startDate.getHours();
                    var endHours = endDate.getHours();
                    var hoursBetween = Math.abs(endHours-startHours);

                    console.log(`startHours: ${startHours}  endHours: ${endHours}  hoursBetween: ${hoursBetween}`);

                    if(hoursBetween < 24)
                    {
                        if(currentFilters.timeSlot === 1 )
                        {
                            if(startHours >= 6 && startHours <12 && endHours >=6 && endHours <12 && hoursBetween > 0)
                            {
                                //do nothing
                            }
                            else
                            {
                                addItem = false;
                            }
                        }
                        else if(currentFilters.timeSlot === 2 )
                        {
                            if(startHours >= 12 && startHours <18  && endHours >=12 && endHours <18 && hoursBetween > 0)
                            {
                                //do nothing
                            }
                            else
                            {
                                addItem = false;
                            }
                        }
                        else if(currentFilters.timeSlot === 3)
                        {
                            if(startHours >= 18 && startHours <24 && endHours >=18 && endHours <24 && hoursBetween > 0)
                            {
                                //do nothing
                            }
                            else
                            {
                                addItem = false;
                            }
                        }
                    }
                }
            }

            if(currentFilters.price !== 0)
            {
                if(currentFilters.price === 5)
                {
                    if(originalItems[i].price < 5*5)
                    {
                        addItem = false;
                    }
                }
                else
                {
                    let upperbound = (currentFilters.price+1) * 5;
                    let lowerbound = (currentFilters.price-1) * 5;

                    if(originalItems[i].price <= upperbound && originalItems[i].price > lowerbound)
                    {
                        
                    }
                    else{
                        addItem = false;
                    }
                }
            }

            if(currentFilters.location !== 0)
            {
                
            }

            if(addItem)
            {
                newItemList.push(originalItems[i]);
            }

            addItem = true;
        }

        console.log(newItemList);
        console.log("Finished applying filters");

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