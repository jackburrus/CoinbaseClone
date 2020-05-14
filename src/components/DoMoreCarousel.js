import React from 'react';
import Carousel from 'react-native-snap-carousel';
import { StyleSheet } from 'react-native';
import { device, images } from '../constants';

// components
import DoMoreItem from './DoMoreItem';

// data
const slidesData = [
  {
    title: 'Automate your investing',
    subtitle: 'Invest in crypto every day, week, or month. Automatically.',
    image: images.calendarGirl
  },
  {
    title: 'Donate to GiveCrypto.org',
    subtitle: 'Give cryptocurrency to help people in need.',
    image: images.packageImage
  }
];

class SlideShow extends React.Component {
  render() {
    const itemWidth = device.width / 1.4;

    return (
      <Carousel
        ref={c => {
          this.carousel = c;
        }}
        activeSlideAlignment="start"
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        containerCustomStyle={styles.carouselContainer}
        contentContainerCustomStyle={{
          alignItems: 'center',
          justifyContent: 'center'
        }}
        
        data={slidesData}
     
        renderItem={({ item: { title, subtitle, image } }) => (
          <DoMoreItem title={title} subtitle={subtitle} image={image} />
        )}
        sliderWidth={device.width}
        itemWidth={itemWidth}
      />
    );
  }
}

const styles = StyleSheet.create({
  carouselContainer: {
    paddingLeft: 10,
    marginTop: 10,
    marginBottom: 10
  }
});

export default SlideShow;
