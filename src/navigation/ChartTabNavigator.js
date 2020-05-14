// export default App;
import React from 'react';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChartHour from '../components/ChartHour';
import ChartDay from '../components/ChartDay';
import ChartWeek from '../components/ChartWeek';

const Tab = createBottomTabNavigator();

const ChartTabNavigator = () => (
  <Tab.Navigator
    activeColor="black"
    inactiveColor="grey"
    tabBarOptions={{
      style: {
        // height: 40,
        backgroundColor: '#F2F2F2',
        alignItems: 'center',
        justifyContent: 'center'
        // borderWidth: 2
      },
      labelStyle: { fontSize: 15, fontWeight: 'bold' },
      showIcon: false,
      tabStyle: { justifyContent: 'center' }
    }}
  >
    <Tab.Screen
      name="Hour"
      component={ChartHour}
    // options={{ tabBarLabel: 'Hour' }}
    />
    <Tab.Screen name="Day" component={ChartDay} />
    <Tab.Screen name="Week" component={ChartWeek} />
    <Tab.Screen name="Month" component={ChartWeek} />
    <Tab.Screen name="Year" component={ChartWeek} />
    <Tab.Screen name="All" component={ChartWeek} />
  </Tab.Navigator>
);
export default ChartTabNavigator;
