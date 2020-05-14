import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation-stack';

// screens
import Portfolio from '../screens/Portfolio';
import MultiLevel2Screen from '../screens/MultiLevel2Screen';
// import ChartTabNavigator from './ChartTabNavigator';

// icons
import SvgPages from '../components/icons/Svg.Pages';

const MultiTabBarIcon = ({ focused }) => <SvgPages active={focused} />;
MultiTabBarIcon.propTypes = {
  // required
  focused: PropTypes.bool.isRequired
};

// Multi Stack
// /////////////////////////////////////////////////////////////////////////////
const MultiStack = createStackNavigator(
  {
    MultiBase: Portfolio,
    MultiLevel2: MultiLevel2Screen
  },
  {
    navigationOptions: {
      tabBarLabel: 'Portfolio',
      tabBarIcon: MultiTabBarIcon
    }
  }
);

export default MultiStack;
