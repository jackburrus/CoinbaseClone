import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { device, colors } from '../constants';

const PricesLineItem = ({ coinIcon, title, price }) => (
  <TouchableOpacity style={styles.container}>
    <View style={styles.logoAndTitle}>
      <Image style={styles.logo} source={coinIcon} resizeMode="contain" />
      <Text>{title}</Text>
    </View>
    <View style={styles.priceAndArrow}>
      <Text>{price}</Text>
      <AntDesign name="right" size={12} color="grey" />
    </View>
  </TouchableOpacity>
);
export default PricesLineItem;

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
  priceAndArrow: {
    flexDirection: 'row',
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
  }
});
