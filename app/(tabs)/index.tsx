import { ScrollView, StyleSheet, Alert } from 'react-native';

import { View } from '../../components/Themed';
import NumericInput from '../../components/leaf/NumericInput';
import MainCard from '../../components/tree/MainCard';
import ArrowButton from '../../components/leaf/ArrowButton';

export default function Index() {
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

  // TODO: テスト用に適当に表示しているコードを削除する
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled' scrollEnabled={false}>
      <View style={styles.container}>
        <MainCard title='Default Title' headerBgColor='blue'>
          <NumericInput label='時給' unit='¥' unitPosition='left' />
          <NumericInput label='月収' unit='¥' unitPosition='left' />
          <NumericInput label='年収' unit='¥' unitPosition='left' />
          <NumericInput label='Time' unit='h' unitPosition='right' />
          <ArrowButton direction='right' onClick={onPressAlert} />
          <ArrowButton direction='left' onClick={onPressAlert} />
        </MainCard>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 35,
  },
});
