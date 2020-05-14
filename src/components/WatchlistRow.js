/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { VictoryLine, VictoryChart, VictoryContainer } from 'victory-native';
import { device, func } from '../constants';
import fonts from '../constants/fonts';

const WatchlistRow = ({
  coin,
  ticker,
  logo,
  price,
  navigation,
  lineColor,
  gainloss
}) => (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Coins')}
    >
      <View style={styles.logoAndTitle}>
        <Image style={styles.logo} source={{ uri: logo }} resizeMode="contain" />
        <View style={styles.titleAndTicker}>
          <Text style={styles.coinText}>{coin}</Text>
          <Text style={styles.tickerText}>{ticker}</Text>
        </View>
      </View>

      <VictoryLine
        padding={{ top: 10 }}

        animate={{
          duration: 2000,
          onLoad: { duration: 1000 }
        }}
        data={[
          { x: 0, y: 0 },
          { x: 2, y: func.getRandomInt(1, 3) },
          { x: 4, y: func.getRandomInt(4, 8) },
          { x: 6, y: func.getRandomInt(0, 2) },
          { x: 8, y: func.getRandomInt(2, 7) },
          { x: 8.5, y: func.getRandomInt(2, 9) },
          { x: 10, y: func.getRandomInt(7, 11) },
          { x: 12, y: func.getRandomInt(9, 12) },
          { x: 14, y: func.getRandomInt(11, 4) },
          { x: 16, y: func.getRandomInt(14, 17) },
          { x: 18, y: func.getRandomInt(15, 19) },
          { x: 20, y: 20 }
        ]}
        width={60}
        height={30}
        interpolation="natural"
        style={{
          borderWidth: 2,
          data: {
            stroke: lineColor
          }
        }}
      />
   

      <View style={styles.priceContainer}>
        <Text>${price}</Text>
        <Text>{gainloss}</Text>
      </View>
    </TouchableOpacity>
  );
export default WatchlistRow;

WatchlistRow.propTypes = {
  coin: PropTypes.string.isRequired,
  logo: PropTypes.node.isRequired
};

const styles = StyleSheet.create({
  container: {
    width: device.width,
    borderBottomWidth: 2,
    borderColor: 'grey',
    height: device.height / 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  logo: {
    height: 40,
    width: 40
  },
  titleAndTicker: {
    flexDirection: 'column',
    paddingLeft: 10,
    // borderWidth: 2,
    justifyContent: 'space-around'
  },
  logoAndTitle: {
    flexDirection: 'row',
    paddingLeft: 10
  },
  priceContainer: {
    marginRight: 20
  },
  coinText: {
    fontFamily: fonts.spartan_semi_bold,
    fontSize: 12
  },
  tickerText: {
    fontFamily: fonts.spartan,
    fontSize: 10
  }
});
