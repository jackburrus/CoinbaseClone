/* eslint-disable */
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import GainersLosersLinesItem from '../../components/GainersLosersLineItem';
import { images } from '../../constants';
import coinData from '../../mockdata/CoinData';
import Consumer from '../../config/configContext';
import { coinList } from '../../constants/coins';
import fonts from '../../constants/fonts';

const AllAssets = () => (
  <Consumer>
    {ctx => {
      if (ctx.data.length === 0) {
        return null;
      }

      return ctx.data.Data.map(coin => {
        if (coinList.indexOf(coin.CoinInfo.FullName) > -1) {
          return (
            <View key={coin.CoinInfo.Id}>
              <GainersLosersLinesItem
                coinIcon={`https://cryptocompare.com/${coin.CoinInfo.ImageUrl}`}
                title={coin.CoinInfo.FullName}
                price={coin.RAW.USD.PRICE.toFixed(2)}
                gainLoss={
                  coin.RAW.USD.CHANGEPCT24HOUR.toFixed(2).indexOf('-') ? (
                    <Text
                      style={{
                        color: '#0A8754',
                        fontFamily: fonts.spartan,
                        fontSize: 12
                      }}
                    >
                      +{coin.RAW.USD.CHANGEPCT24HOUR.toFixed(2)}%
                    </Text>
                  ) : (
                      <Text
                        style={{
                          color: '#A20021',
                          fontFamily: fonts.spartan,
                          fontSize: 12
                        }}
                      >
                        {coin.RAW.USD.CHANGEPCT24HOUR.toFixed(2)}
%
                      </Text>
                    )
                }
              />
            </View>
          );
        }
      });
    }}
  </Consumer>
);

const TradableAssets = () => (
  <Consumer>
    {ctx => {
      if (ctx.data.length === 0) {
        return null;
      }

      return ctx.data.Data.map(coin => {
        if (coinList.indexOf(coin.CoinInfo.FullName) > -1) {
          return (
            <View key={coin.CoinInfo.Id}>
              <GainersLosersLinesItem
                coinIcon={`https://cryptocompare.com/${coin.CoinInfo.ImageUrl}`}
                title={coin.CoinInfo.FullName}
                price={coin.RAW.USD.PRICE.toFixed(2)}
                gainLoss={
                  coin.RAW.USD.CHANGEPCT24HOUR.toFixed(2).indexOf('-') ? (
                    <Text style={{ color: '#0A8754' }}>
                      + {coin.RAW.USD.CHANGEPCT24HOUR.toFixed(2)}%
                    </Text>
                  ) : (
                      <Text style={{ color: '#A20021' }}>
                        {coin.RAW.USD.CHANGEPCT24HOUR.toFixed(2)}%
                      </Text>
                    )
                }
              />
            </View>
          );
        }
      });
    }}
  </Consumer>
);

const TopGainers = () => (
  <Consumer>
    {ctx => {
      if (ctx.data.length === 0) {
        return null;
      }

      return ctx.data.Data.map(coin => {
        if (coinList.indexOf(coin.CoinInfo.FullName) > -1) {
          return (
            <View key={coin.CoinInfo.Id}>
              <GainersLosersLinesItem
                coinIcon={`https://cryptocompare.com/${coin.CoinInfo.ImageUrl}`}
                title={coin.CoinInfo.FullName}
                price={coin.RAW.USD.PRICE.toFixed(2)}
                gainLoss={
                  coin.RAW.USD.CHANGEPCT24HOUR.toFixed(2).indexOf('-') ? (
                    <Text style={{ color: '#0A8754' }}>
                      + {coin.RAW.USD.CHANGEPCT24HOUR.toFixed(2)}%
                    </Text>
                  ) : (
                      <Text style={{ color: '#A20021' }}>
                        {coin.RAW.USD.CHANGEPCT24HOUR.toFixed(2)}%
                      </Text>
                    )
                }
              />
            </View>
          );
        }
      });
    }}
  </Consumer>
);

const TopLosers = () => (
  <Consumer>
    {ctx => {
      if (ctx.data.length === 0) {
        return null;
      }

      return ctx.data.Data.map(coin => {
        if (coinList.indexOf(coin.CoinInfo.FullName) > -1) {
          return (
            <View key={coin.CoinInfo.Id}>
              <GainersLosersLinesItem
                coinIcon={`https://cryptocompare.com/${coin.CoinInfo.ImageUrl}`}
                title={coin.CoinInfo.FullName}
                price={coin.RAW.USD.PRICE.toFixed(2)}
                gainLoss={
                  coin.RAW.USD.CHANGEPCT24HOUR.toFixed(2).indexOf('-') ? (
                    <Text style={{ color: '#0A8754' }}>
                      + {coin.RAW.USD.CHANGEPCT24HOUR.toFixed(2)}%
                    </Text>
                  ) : (
                      <Text style={{ color: '#A20021' }}>
                        {coin.RAW.USD.CHANGEPCT24HOUR.toFixed(2)}%
                      </Text>
                    )
                }
              />
            </View>
          );
        }
      });
    }}
  </Consumer>
);

export { AllAssets, TradableAssets, TopGainers, TopLosers };
