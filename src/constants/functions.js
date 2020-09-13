import { Image } from 'react-native';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React from 'react';

import axios from 'axios';
import preloadFonts from './preloadFonts';
import preloadImages from './preloadImages';

import { CryptoCompareKey, CoinApiKey, CMC_API_KEY } from './API_Keys';

// cache fonts
// /////////////////////////////////////////////////////////////////////////////
const cacheFonts = fonts => fonts.map(font => Font.loadAsync(font));

// cache images
// /////////////////////////////////////////////////////////////////////////////
const cacheImages = images => {
  return Object.values(images).map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    }

    return Asset.fromModule(image).downloadAsync();
  });
};

// preload async
// /////////////////////////////////////////////////////////////////////////////
const loadAssetsAsync = async () => {
  // preload assets
  const fontAssets = cacheFonts(preloadFonts);
  const imageAssets = cacheImages(preloadImages);

  // promise load all
  return Promise.all([...fontAssets, ...imageAssets]);
};

const getCurrentBalance = () => {
  return 'Balance: $0.25';
};

const getData = async () => {
  const headers = { authorization: CryptoCompareKey };
  const mktCapFull =
    'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=70&tsym=USD';

  const results = await axios
    .get(mktCapFull, headers)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });

  return results;
};

const getNewsData = async () => {
  const headers = { authorization: CryptoCompareKey };
  const newsApi = 'https://min-api.cryptocompare.com/data/v2/news/?lang=EN';
  const results = await axios
    .get(newsApi, headers)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
  return results;
};

const getTopMover = (currentPrice, prevPrice) => {
  const result = currentPrice / prevPrice;

  if (result > 1) {
    const res = (result / 100) * 10000 - 100;
    return res.toFixed(2);
  }
  const res = (result / 100) * 10000 - 100;
  return res.toFixed(2);
};

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default {
  cacheFonts,
  cacheImages,
  loadAssetsAsync,
  getCurrentBalance,
  getData,
  getTopMover,
  getRandomInt,
  getNewsData
};
