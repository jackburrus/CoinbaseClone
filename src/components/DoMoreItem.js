import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { device } from '../constants';
import fonts from '../constants/fonts';

const DoMoreItem = ({ title, subtitle, image }) => (
  <View style={styles.container}>
    <View style={styles.titleAndSubtitleContainer}>
      <Text style={styles.titleSyle}>{title}</Text>
      <Text style={styles.subtitleStyle}>{subtitle}</Text>
    </View>

    <View style={styles.imageContainer}>
      <Image style={styles.image} source={image} resizeMode="contain" />
    </View>
  </View>
);
export default DoMoreItem;

const styles = StyleSheet.create({
  container: {
    width: device.width / 1.5,
    height: device.height / 5.5,
   
    padding: 10,
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
  titleSyle: {
    color: 'blue',
    marginBottom: 5,
    fontFamily: fonts.spartan
  },
  image: {
    width: device.width / 1.5,
    paddingRight: 10,
    height: 60
   
  },
  titleAndSubtitleContainer: {
   
    flex: 1
  },
  
  subtitleStyle: {
    fontFamily: fonts.spartan,
    fontSize: 12
  }
});
