import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { device } from '../constants';
import fonts from '../constants/fonts';

const CarouselItem = ({ name, currentPrice, percentageChange, logo }) => (
  <View style={styles.container}>
    <View style={styles.percentageChangeContainer}>
      <Text>{percentageChange}</Text>
    </View>
    <View style={styles.logoAndName}>
      <Image style={styles.logo} source={{ uri: logo }} resizeMode="contain" />

      <View style={styles.nameAndPrice}>
        <Text style={styles.tickerText}>{name}</Text>
        <Text style={styles.price}>{currentPrice}</Text>
      </View>
    </View>
  </View>
);
export default CarouselItem;

const styles = StyleSheet.create({
  container: {
    height: device.height / 7,
    width: device.height / 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 2
  },
  percentageChange: {
    fontSize: 30
  },
  nameAndPrice: {
    flexDirection: 'column',
    flex: 1
  },
  percentageChangeContainer: {
    flex: 2,
    justifyContent: 'center'
  },
  logoAndName: {
    flex: 1,
    flexDirection: 'row'
  },
  logo: {
    height: 20,
    width: 20,
    margin: 10
  },
  tickerText: {
    fontFamily: fonts.spartan,
    fontSize: 12
  },
  price: {
    fontFamily: fonts.spartan,
    fontSize: 10
  }
});
