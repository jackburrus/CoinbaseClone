import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import fonts from '../constants/fonts';

const TradeLineItem = ({ title, subtitle, iconName, containerStyle }) => (
  <TouchableOpacity style={[styles.container, containerStyle]}>
    <MaterialCommunityIcons name={iconName} size={32} color="blue" />

    <View style={[styles.titleAndSubtitleContainer]}>
      <Text style={{ fontFamily: fonts.spartan_semi_bold }}>{title}</Text>

      <Text style={{ fontFamily: fonts.spartan }}>{subtitle}</Text>
    </View>
  </TouchableOpacity>
);
export default TradeLineItem;

const styles = StyleSheet.create({
  container: {
    
    width: '100%',
    flexDirection: 'row',
    height: 70,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',


    alignItems: 'center'

  },
  titleAndSubtitleContainer: {
    flexDirection: 'column',
    paddingLeft: 10,
    paddingTop: 10,
    justifyContent: 'space-around',

    height: 50
  },
  iconContainer: {
    borderWidth: 2,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
