import { ScrollView, StyleSheet, Alert } from 'react-native';

import { View } from '../../components/Themed';
import ArrowButton from '../../components/leaf/ArrowButton';
import MainCardWithInput from '../../components/tree/MainCardWithInput';

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
        <ArrowButton direction='left' onClick={onPressAlert} />
        <MainCardWithInput />
        <ArrowButton direction='right' onClick={onPressAlert} />
      </View>
    </ScrollView>
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
