import MainCard from './MainCard';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MainCardWithMoneyResult = () => {
  // TODO: ロジックについてはMainのロジック実装後に対応
  const mainPrice = 0;
  const [previousPrice, setPreviousPrice] = useState(0);
  const [difference, setDifference] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const previousPriceData = await AsyncStorage.getItem('previousPrice');
        const previousPriceNumber = previousPriceData ? parseFloat(previousPriceData) : 0;
        setPreviousPrice(previousPriceNumber);

        const differenceData = previousPriceNumber ? mainPrice - previousPriceNumber : 0;
        setDifference(differenceData);

        await AsyncStorage.setItem('previousPrice', mainPrice.toString());
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [mainPrice]);

  return (
    <MainCard title='Time is Money' headerBgColor='#cda7ff'>
      <View style={styles.container}>
        <Text style={styles.mainPriceText}> ¥ {mainPrice || 0}</Text>
        <Text style={styles.previousPriceText}> 前回：¥ {previousPrice || '---'}</Text>
        <Text style={styles.differencePriceText}> 差額：¥ {difference || '---'}</Text>
      </View>
    </MainCard>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 580,
    width: 173,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  mainPriceText: {
    height: 48,
    fontSize: 33,
    marginVertical: 18,
    color: '#7e7e7e',
    fontWeight: 'bold',
  },
  previousPriceText: {
    height: 20,
    fontSize: 14,
    marginVertical: 18,
    color: '#7e7e7e',
  },
  differencePriceText: {
    height: 20,
    fontSize: 14,
    color: '#7e7e7e',
  },
});

export default MainCardWithMoneyResult;
