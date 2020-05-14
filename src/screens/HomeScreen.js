import React from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform
} from 'react-native';

import { gStyle, device } from '../constants';

import fonts from '../constants/fonts';

// components
import TopMoversCarousel from '../components/TopMoversCarousel';
import DoMoreCarousel from '../components/DoMoreCarousel';
import TopStoryLineItem from '../components/TopStoryLineItem';
import Consumer from '../config/configContext';
import WatchList from '../components/WatchList';

const HomeScreen = ({ navigation }) => {
  return (
    <Consumer>
      {ctx => {
        if (ctx.newsData.length === 0) {
          return null;
        }
        return (
          <SafeAreaView style={styles.mainView}>
            <ScrollView style={styles.scrollViewContainer}>
              <View style={styles.watchListContainer}>
                <View style={styles.watchListTitleContainer}>
                  <Text style={styles.watchListTitle}>Watchlist</Text>
                </View>
                <ScrollView>
                  <View style={{ flex: 1 }}>{WatchList(ctx, navigation)}</View>
                </ScrollView>
              </View>
              <View style={styles.topMoversContainer}>
                <Text style={styles.topMoversTitle}>Top Movers</Text>

                <TopMoversCarousel />
              </View>
              <View style={styles.doMoreContainer}>
                <Text style={styles.doMoreText}>Do more with crypto</Text>
                <DoMoreCarousel />
              </View>
              <View style={styles.topStoriesContainer}>
                <Text style={styles.topStoriesText}>Top Stories</Text>
                <ScrollView>
                  {ctx.newsData.Data.slice(0, 7).map(newsItem => {
                    return (
                      <TopStoryLineItem
                        key={newsItem.id}
                        title={newsItem.title}
                        organization={newsItem.source_info.name}
                        image={`${newsItem.imageurl}`}
                      />
                    );
                  })}
                </ScrollView>
              </View>
            </ScrollView>
          </SafeAreaView>
        );
      }}
    </Consumer>
  );
};

HomeScreen.navigationOptions = {
  headerTitleStyle: gStyle.headerTitleStyle,
  title: 'Home',
  header: null
};

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    ...Platform.select({
      android: {
        marginTop: 25
      }
    })
  },
  balanceContainer: {
    height: device.height / 15,
    width: device.width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10
  },
  titleAndBalanceContainer: {
    flexDirection: 'column',
    marginLeft: 10
  },
  balanceTitle: {
    fontSize: 12,
    color: 'grey'
  },
  balanceAmount: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  watchListContainer: {
    height: device.height / 2.0
  },

  topMoversContainer: {
    height: device.height / 4
  },
  doMoreContainer: {
    height: device.height / 3.5
  },
  topStoriesContainer: {
    height: device.height / 1.5
  },
  watchListTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
    paddingBottom: 10,
    fontFamily: fonts.spartan_semi_bold
  },
  watchListTitleContainer: {
    borderBottomWidth: 2,
    borderColor: 'grey',
    marginTop: 15
  },
  topMoversTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
    fontFamily: fonts.spartan_semi_bold
  },
  doMoreText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
    fontFamily: fonts.spartan_semi_bold
  },
  topStoriesText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
    fontFamily: fonts.spartan_semi_bold
  }
});

export default HomeScreen;
