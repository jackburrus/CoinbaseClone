import React from 'react';
import { View, StyleSheet } from 'react-native';

import TradeLineItem from './TradeLineItem';

const ModalMain = props => (
  <View style={styles.modalContainer}>
    <TradeLineItem
      title="Buy"
      subtitle="Buy crypto with cash"
      iconName="wallet"
    />
    <TradeLineItem
      title="Sell"
      subtitle="Sell crypto for cash"
      iconName="cash"
    />
    <TradeLineItem
      title="Convert"
      subtitle="Convert one crypto to another"
      iconName="arrow-left-right-bold-outline"
      containerStyle={styles.bottomContainer}
    />
  </View>
);
export default ModalMain;

const styles = StyleSheet.create({
  modalContainer: {
    
    backgroundColor: 'white',
    
    borderBottomColor: 0
  },
  bottomContainer: {
    borderBottomWidth: 0
  }
});
