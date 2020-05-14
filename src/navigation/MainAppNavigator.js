import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Platform
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Portal, FAB } from 'react-native-paper';
import { Ionicons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import { device } from '../constants';
import ModalMain from '../components/ModalMain';

import Portfolio from '../screens/Portfolio';
import PricesScreen from '../screens/PricesScreen';
import SettingsScreen from '../screens/SettingsScreen';

import HomeStack from './HomeStack';

const NullScreen = () => null;

const Tab = createMaterialBottomTabNavigator();

const MainAppNavigator = navigation => {
  const [isModalShowing, setModalShowing] = useState(false);
  const handleModalPress = () => {
    if (isModalShowing === false) {
      setModalShowing(true);
    } else {
      setModalShowing(false);
    }
  };

  const dismissModalHandler = () => {
    setModalShowing(false);
  };

  return (
    <React.Fragment>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="black"
          inactiveColor="grey"
          barStyle={{
            backgroundColor: '#fff'
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeStack}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: () => (
                <Ionicons name="md-home" color="grey" size={25} />
              )
            }}
          />
          <Tab.Screen
            name="Portfolio"
            component={Portfolio}
            options={{
              tabBarIcon: () => (
                <Entypo
                  name="documents"
                  color="grey"
                  size={25}
                  style={{ height: 30 }}
                />
              )
            }}
          />

          <Tab.Screen name=" " component={NullScreen} />
          <Tab.Screen
            name="Prices"
            component={PricesScreen}
            options={{
              tabBarLabel: 'Prices',
              tabBarIcon: () => (
                <MaterialCommunityIcons name="finance" color="grey" size={25} />
              )
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              tabBarLabel: 'Settings',

              tabBarIcon: () => (
                <Ionicons name="md-settings" color="grey" size={25} />
              )
            }}
          />
        </Tab.Navigator>

        <Portal navigation={navigation}>
          <FAB
            onPress={() => handleModalPress()}
            icon="arrow-collapse"
            style={styles.exchangeButton}
          // style={{
          //   position: 'absolute',
          //   bottom: 50,
          //   right: device.width / 2.3
          // }}
          />
          <View style={styles.modalContainerCon}>
            <Modal
              isVisible={isModalShowing}
              style={styles.modalComponent}
              customBackdrop={
                // eslint-disable-next-line react/jsx-wrap-multilines
                <TouchableWithoutFeedback onPress={dismissModalHandler}>
                  <View
                    style={{
                      backgroundColor: 'transparent',
                      flex: 1
                      // borderWidth: 2,
                      // borderColor: 'red',
                      // width: device.width
                      // height: 50
                    }}
                  />
                </TouchableWithoutFeedback>
              }
            >
              <ModalMain />
            </Modal>
          </View>
        </Portal>
      </NavigationContainer>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  TradeButton: {
    position: 'absolute',
    bottom: 0,

    borderRadius: 64,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  modalComponent: {
    justifyContent: 'flex-end',

    marginBottom: 100
  },
  exchangeButton: {
    ...Platform.select({
      ios: {
        position: 'absolute',
        bottom: 50,
        right: device.width / 2.3,
        backgroundColor: '#0021F5'
      },
      android: {
        position: 'absolute',
        bottom: 30,
        right: device.width / 2.3,
        backgroundColor: '#0021F5'
      }
    })
  }
});

export default MainAppNavigator;
