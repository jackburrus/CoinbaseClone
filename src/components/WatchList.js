import React from 'react';
import { View, Text } from 'react-native';
import WatchListRow from './WatchlistRow';
import { coinList } from '../constants/coins';

const chartColors = {
  Bitcoin: '#EA973D',
  Ethereum: 'black',
  Litecoin: 'silver',
  Monero: '#EA973D',
  IOTA: 'black',
  Dogecoin: 'yellow'
};

const WatchList = (ctx, navigation) => {
  if (ctx.data.length === 0) {
    return null;
  }

  return ctx.data.Data.map(coin => {
    const randomColor =
      chartColors[Math.floor(Math.random() * chartColors.length)];

    if (coinList.indexOf(coin.CoinInfo.FullName) > -1) {
      return (
        <View key={coin.CoinInfo.Id}>
          <WatchListRow
            coin={coin.CoinInfo.FullName}
            logo={`https://cryptocompare.com/${coin.CoinInfo.ImageUrl}`}
            navigation={navigation}
            price={coin.RAW.USD.PRICE}
            ticker={coin.CoinInfo.Name}
            lineColor={chartColors[coin.CoinInfo.FullName]}
            gainloss={
              coin.RAW.USD.CHANGEPCT24HOUR.toFixed(2).indexOf('-') ? (
                <Text style={{ color: '#0A8754' }}>
                  +
                  {' '}
                  {coin.RAW.USD.CHANGEPCT24HOUR.toFixed(2)}%
                </Text>
              ) : (
                  <Text style={{ color: '#A20021' }}>
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
};

export default WatchList;
