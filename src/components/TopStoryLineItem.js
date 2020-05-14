import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { device } from '../constants';
import fonts from '../constants/fonts';

const TopStoryLineItem = ({ id, title, organization, hoursAgo, image }) => (
  <View style={styles.container}>
    <View>
      <Text style={styles.titleText}>{title}</Text>
      <View style={styles.orgAndHoursContainer}>
        <Text style={styles.subTitle}>{organization}</Text>
        <Text style={styles.subTitle}>{hoursAgo}</Text>
      </View>
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={{ uri: image }}
        resizeMode="contain"
        style={styles.image}
      />
    </View>
  </View>
);
export default TopStoryLineItem;

const styles = StyleSheet.create({
  container: {
    width: device.width,
    borderBottomWidth: 1,
    height: device.height / 10,
    marginTop: 20,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
    
  },
  titleText: {
    fontWeight: 'bold',
    
    width: device.width / 1.5,
    fontFamily: fonts.spartan_semi_bold
  },
  imageContainer: {
    paddingBottom: 10
   
  },
  orgAndHoursContainer: {
    flexDirection: 'row',
    marginTop: 10,
    width: device.width / 2.5,
    justifyContent: 'space-around'
  },
  subTitle: {
    fontSize: 12,
    fontWeight: '300',
    fontFamily: fonts.spartan
  },
  image: {
    height: 75,
    width: 75
  }
});
