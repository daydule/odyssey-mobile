import React, { useMemo } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CommodityCard, { Commodity } from '../leaf/CommodityCard';
import MainCard from './MainCard';

type Props = {
  commodities: Commodity[];
};

const MainCardWithCommodity: React.FC<Props> = ({ commodities }) => {
  const displayCommodities = useMemo(() => {
    return (
      <>
        {commodities.map((commodity, index) => {
          return (
            <View key={`Commodity_${index}`}>
              {index !== 0 && <View style={styles.divider} />}
              <CommodityCard commodity={commodity}></CommodityCard>
            </View>
          );
        })}
      </>
    );
  }, [commodities]);

  return (
    <MainCard title='Commodity' headerBgColor='#cda7ff'>
      {commodities.length === 0 && (
        <View style={styles.noCommodityContainer}>
          <Text>ここには購入可能な商品が表示されます。{'\n'}</Text>
          <Text>時給や稼働時間を入力後、計算ボタンを押し、得した金額/損した金額を計算しましょう。</Text>
        </View>
      )}
      {commodities.length > 0 && <View style={styles.container}>{displayCommodities}</View>}
    </MainCard>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 30,
    width: 281,
    justifyContent: 'space-between',
  },
  noCommodityContainer: {
    margin: 30,
    width: 281,
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
