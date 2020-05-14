/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Carousel from 'react-native-snap-carousel';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { device, images, func } from '../constants';

// components
import CarouselItem from './CarouselItem';

// data
import Consumer from '../config/configContext';

const itemWidth = device.width / 3;
const cap = 5;
const TopMoverCarousel = () => {
  return (
    <Consumer>
      {ctx => {
        if (ctx.data.length === 0) {
          return null;
        }
       
        return (
          <Carousel
            vertical={false}
            autoplay={false}
            data={ctx.data.Data.slice(0, cap)}
            inactiveSlideScale={1}
            inactiveSlideOpacity={1}
            contentContainerCustomStyle={{
              alignItems: 'center'
            }}
            containerCustomStyle={styles.carouselContainer}
            activeSlideAlignment="start"
            renderItem={coin => (
              <CarouselItem
                name={coin.item.CoinInfo.Name}
                currentPrice={coin.item.RAW.USD.PRICE.toFixed(2)}
                logo={`https://cryptocompare.com/${coin.item.CoinInfo.ImageUrl}`}
                
                percentageChange={
                  coin.item.RAW.USD.CHANGEPCT24HOUR.toFixed(2).indexOf('-') ? (
                    <Text style={{ color: '#0A8754', fontSize: 30 }}>
                      +{coin.item.RAW.USD.CHANGEPCT24HOUR.toFixed(2)}%
                    </Text>
                  ) : (
                    <Text style={{ color: '#A20021', fontSize: 30 }}>
                      {coin.item.RAW.USD.CHANGEPCT24HOUR.toFixed(2)}%
                    </Text>
                  )
                }
              />
            )}
            sliderWidth={device.width}
            itemWidth={itemWidth}
          />
        );
      }}
    </Consumer>
  );
};
export default TopMoverCarousel;

const styles = StyleSheet.create({
  carouselContainer: {
    paddingLeft: 10
  }
});
