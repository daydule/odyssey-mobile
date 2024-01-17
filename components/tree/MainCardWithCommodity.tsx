import React from 'react';
import { View, StyleSheet } from 'react-native';
import CommodityCard from '../leaf/CommodityCard';

const MainCardWithCommodity: React.FC = () => {
  return (
    <View style={styles.container}>
      <CommodityCard
        imageUrl='a'
        imageAccessibilityLabel='b'
        upperText='テストテストテストテストテストテストテストテストテストテストテストテスト'
        lowerText='$1,000,000'
      />
      <View style={styles.divider} />
      <CommodityCard
        imageUrl='a'
        imageAccessibilityLabel='b'
        upperText='テストテストテストテストテストテストテストテストテストテストテストテスト'
        lowerText='$1,000,000'
      />
      <View style={styles.divider} />
      <CommodityCard
        imageUrl='a'
        imageAccessibilityLabel='b'
        upperText='テストテストテストテストテストテストテストテストテストテストテストテスト'
        lowerText='$1,000,000'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 30,
    width: 281,
    height: 414,
    justifyContent: 'space-between',
  },
  divider: {
    height: 1,
    width: 260,
    backgroundColor: '#DDDDDD',
    alignSelf: 'center',
    marginVertical: 4,
  },
});

export default MainCardWithCommodity;
