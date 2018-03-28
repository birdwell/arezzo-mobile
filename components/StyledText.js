import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

const StyledText = (props) => (<Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />);

StyledText.propTypes = {
  style: PropTypes.object
};

export default StyledText;