import { ScrollView, StyleSheet, Alert } from 'react-native';

import { View } from 'react-native';
import React from 'react';
import ArrowButton from '../leaf/ArrowButton';
import MainCardWithInput from '../tree/MainCardWithInput';
import PriceContext from './PriceContext';
import Onboarding from '../leaf/OnBoarding';

export default function Main() {
  return <Onboarding />;
  // TODO: Alertの動作を実装後に削除（テスト用に記載）
  const onPressAlert = () => {
    Alert.alert('アローボタンが押下されました。', '', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);
  };
  return (
    <PriceContext>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled' scrollEnabled={false}>
        <View style={styles.container}>
          <ArrowButton direction='left' onClick={onPressAlert} />
          <MainCardWithInput />
          <ArrowButton direction='right' onClick={onPressAlert} />
        </View>
      </ScrollView>
    </PriceContext>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 35,
  },
});
