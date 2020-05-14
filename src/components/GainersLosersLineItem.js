import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { device, colors } from '../constants';
import fonts from '../constants/fonts';

const getPercentageChangeStyle = gainLoss => {
  if (gainLoss.gainLoss.includes('+')) {
    return { color: 'green' };
  }
  return { color: 'red' };
};


const GainersLosersLinesItem = ({ coinIcon, title, price, gainLoss }) => (
  <View>
    
    <TouchableOpacity style={styles.container}>
      <View style={styles.logoAndTitle}>
        <Image
          source={{ uri: coinIcon }}
          resizeMode="contain"
          style={styles.logo}
        />
        <Text style={{ fontFamily: fonts.spartan, paddingLeft: 5 }}>
          {title}
        </Text>
      </View>
      <View style={styles.priceAndGain}>
        <Text style={{ fontFamily: fonts.spartan, fontSize: 12 }}>
          $
{' '}
          {price}
        </Text>
        <Text>{gainLoss}</Text>
      </View>
    </TouchableOpacity>
  </View>
);
export default GainersLosersLinesItem;

const styles = StyleSheet.create({
  container: {
  
    width: device.width,
    paddingHorizontal: 8,
    paddingVertical: 25,
    borderBottomColor: colors.inactiveGrey,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  priceAndGain: {
    flexDirection: 'column',
    width: 90,
    marginRight: 10,

    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    height: 40,
    width: 40
  },
  logoAndTitle: {
    flexDirection: 'row',
   
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 100,
    marginLeft: 10
  },
  gainLoss: {
    color: 'green'
  }
});
