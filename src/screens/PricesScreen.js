import * as React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Text,
  Platform,
  ScrollView
} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Animated from 'react-native-reanimated';
import { Feather } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { images, device } from '../constants';

import {
  AllAssets,
  TradableAssets,
  TopGainers,
  TopLosers
} from '../assets/data/allAssets';

export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'All assets' },
      { key: 'second', title: 'Tradable assets' },
      { key: 'third', title: 'Top gainers' },
      { key: 'fourth', title: 'Top losers' }
    ]
  };

  _handleIndexChange = index => this.setState({ index });

  _renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const color = Animated.color(
            Animated.round(
              Animated.interpolate(props.position, {
                inputRange,
                outputRange: inputRange.map(inputIndex =>
                  inputIndex === i ? 255 : 0
                )
              })
            ),
            0,
            0
          );

          return (
            <TouchableOpacity
              style={styles.tabItem}
              key={i}
              onPress={() => this.setState({ index: i })}
            >
              <Animated.Text style={[{ color }, styles.tabText]}>
                {route.title}
              </Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  _renderScene = SceneMap({
    first: AllAssets,
    second: TradableAssets,
    third: TopGainers,
    fourth: TopLosers
  });

  render() {
    return (
    
      <SafeAreaView style={{ flex: 1 }}>
        {Platform.OS === 'android' ? <View style={styles.statusBar} /> : null}
        <View style={{ paddingTop: 20 }}>
          <Text style={{ paddingLeft: 20, fontSize: 10, color: 'grey' }}>
            In the past 24 hours
          </Text>
          <View style={styles.headerContainer}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.headerText}>Market is up </Text>
              <Text style={[styles.headerText, { color: 'green' }]}>20%</Text>
            </View>
            <Feather name="search" size={32} color="black" />
          </View>
        </View>
        <TabView
          navigationState={this.state}
          renderScene={this._renderScene}
          renderTabBar={this._renderTabBar}
          onIndexChange={this._handleIndexChange}
        />
      </SafeAreaView>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabBar: {
    
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight

    
  },
  statusBar: {
    height: Constants.statusBarHeight
  },
  tabItem: {
    
    alignItems: 'center',
   
    width: device.width / 4
  },
  headerContainer: {
    
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row'
    
  },
  headerText: {
    fontSize: 20
  },
  tabText: {
    
    fontSize: 12,
    color: 'grey',
    fontWeight: 'bold',
    height: 20,
    width: 120,
    textAlign: 'center',
    justifyContent: 'center'
  }
});
