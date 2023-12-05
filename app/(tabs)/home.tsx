import { ScrollView, StyleSheet, Alert } from 'react-native';

import { View } from '../../components/Themed';
import InputHour from '../../components/leaf/InputHour';
import ArrowButton from '../../components/leaf/ArrowButton';

export default function TabOneScreen() {
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
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled' scrollEnabled={false}>
      <View style={styles.container}>
        <InputHour label='Time' />
        <ArrowButton direction='right' onClick={onPressAlert} />
        <ArrowButton direction='left' onClick={onPressAlert} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
