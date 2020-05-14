import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { func } from '../constants';
import fonts from '../constants/fonts';

import HomeScreen from '../screens/HomeScreen';
import CoinScreen from '../screens/CoinScreen';

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator
    headerMode="float"
    options={{ headerBackTitleVisible: false }}
  >
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: func.getCurrentBalance(),
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: fonts.spartan_semi_bold
        }
      }}
    />
    <Stack.Screen
      name="Coins"
      component={CoinScreen}
      options={{
        title: func.getCurrentBalance(),
        headerTitleStyle: {
          fontFamily: fonts.spartan_semi_bold
        }
      }}
    />
  </Stack.Navigator>
);

export default HomeStack;
