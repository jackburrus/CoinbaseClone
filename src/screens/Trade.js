import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Button,
  TouchableWithoutFeedback
} from 'react-native';

import Modal from 'react-native-modal';
import { device } from '../constants';

import TradeLineItem from '../components/TradeLineItem.js';

const TradeScreen = ({ navigation }) => {
  const [isShowing, setIsShowing] = useState(false);
  const handleModalOpen = () => {
    setIsShowing(true);
  };

  const handleModalClose = () => {
    setIsShowing(false);
  };

  const dismissModalHandler = () => {
    setIsShowing(false);
  };

  navigation.addListener('tabPress', e => {
    e.preventDefault();
    handleModalOpen();
  });

  return (
    
    <View style={styles.modalContainerCon}>
      <Modal
        isVisible={isShowing}
        style={styles.modalComponent}
        customBackdrop={
          <TouchableWithoutFeedback onPress={dismissModalHandler}>
            <View
              style={{
                backgroundColor: 'transparent',
                flex: 1
                
              }}
            />
          </TouchableWithoutFeedback>
        }
      >
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
          />
        </View>
      </Modal>
    </View>
  );
};

export default TradeScreen;

const styles = StyleSheet.create({
  modalContainer: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  modalComponent: {
    
    justifyContent: 'flex-end',
    marginBottom: 100
  }
  
});
