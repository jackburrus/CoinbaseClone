import React from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform
} from 'react-native';

import Constants from 'expo-constants';
import { gStyle, device, images, func } from '../constants';
import { coinList } from '../constants/coins';

import PortfolioLineItem from '../components/PortfolioLineItem.js';

import ChartTabNavigator from '../navigation/ChartTabNavigator';

import Consumer from '../config/configContext';


const Portfolio = ({ navigation }) => {
  return (
    <Consumer>
      {ctx => {
        if (ctx.data.length === 0) {
          return null;
        }
        return (
          <SafeAreaView>
            {Platform.OS === 'android' ? (
              <View style={styles.statusBar} />
            ) : null}

            <ScrollView style={styles.screenContainer}>
              <View style={styles.titleAndBalanceContainer}>
                <Text style={styles.balanceTitle}>Portfolio Balance</Text>
                <Text style={styles.balanceAmount}>
                  {func.getCurrentBalance()}
                </Text>
              </View>
              <View style={styles.chartSectionContainer}>
                <ChartTabNavigator />
              </View>
              {ctx.data.Data.slice(0, 50).map(coin => {
                if (coinList.indexOf(coin.CoinInfo.FullName) > -1) {
                  return (
                    <PortfolioLineItem
                      key={coin.CoinInfo.Id}
                      coinIcon={`https://cryptocompare.com/${coin.CoinInfo.ImageUrl}`}
                      title={coin.CoinInfo.FullName}
                      price={coin.RAW.USD.PRICE.toFixed(2)}
                    />
                  );
                }
              })}
            </ScrollView>
          </SafeAreaView>
        );
      }}
    </Consumer>
  );
};

Portfolio.navigationOptions = {
  headerTitleStyle: gStyle.headerTitleStyle,
  title: 'Portfolio'
};

Portfolio.propTypes = {

  navigation: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  
  statusBar: {
    height: Constants.statusBarHeight
  },
  titleAndBalanceContainer: {
    flexDirection: 'column',
    marginLeft: 10,

    width: device.width
  },
  balanceTitle: {
    fontSize: 12,
    color: 'grey'
  },
  balanceAmount: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  chartSectionContainer: {
    width: device.width,
    height: device.height / 4
  }
});

export default Portfolio;
