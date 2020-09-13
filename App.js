import React, { useState, useEffect } from 'react';
import { AppLoading } from 'expo';
import { Provider as PaperProvider } from 'react-native-paper';
import { func } from './src/constants';
import MainAppNavigator from './src/navigation/MainAppNavigator';
import { ConfigProvider } from './src/config/configContext';

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const getApiData = async () => {
      const results = await func.getData().then(res => res);
      setData(results);
    };
    getApiData();
    const getNewsApiData = async () => {
      const results = await func.getNewsData().then(res => res);
      setNewsData(results);
     
    };
    getNewsApiData();
    setDataLoaded(true);
  }, []);

  if (isLoading === true) {
    return (
      <AppLoading
        onFinish={() => setLoading(false)}
        startAsync={func.loadAssetsAsync}
      />
    );
  }
  return (
    <ConfigProvider data={data} newsData={newsData}>
      <PaperProvider>
        <MainAppNavigator />
      </PaperProvider>
    </ConfigProvider>
  );

}
