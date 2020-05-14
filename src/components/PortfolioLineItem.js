import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { device, colors } from '../constants';
import fonts from '../constants/fonts';

const PortfolioLineItem = ({ coinIcon, title, price }) => (
  <TouchableOpacity style={styles.container}>
    <View style={styles.logoAndTitle}>
      <Image
        style={styles.logo}
        source={{ uri: coinIcon }}
        resizeMode="contain"
      />
      <Text style={styles.title}>{title}</Text>
    </View>
    <View style={styles.priceAndArrow}>
      <Text style={styles.priceText}>
        $
{price}
      </Text>
      <AntDesign name="right" size={12} color="grey" />
    </View>
  </TouchableOpacity>
);
export default PortfolioLineItem;

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
    width: 40,
    padding: 10
  },
  logoAndTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    width: device.width / 2,
    marginLeft: 10
  },
  title: {
    paddingLeft: 10,
    fontFamily: fonts.spartan_semi_bold
  },
  priceText: {
    fontFamily: fonts.spartan,
    fontSize: 12
  }
});
