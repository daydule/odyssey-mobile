import { ScrollView, StyleSheet } from 'react-native';

import { View } from '../../components/Themed';
import InputHour from '../../components/leaf/InputHour';
import MainCard from '../../components/tree/MainCard';

export default function Index() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled' scrollEnabled={false}>
      <View style={styles.container}>
        <MainCard title='Default Title' headerBgColor='blue'>
          <InputHour label='Time' />
          <InputHour label='Time' />
          <InputHour label='Time' />
          <InputHour label='Time' />
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
