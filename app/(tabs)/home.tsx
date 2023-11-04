import { ScrollView, StyleSheet } from 'react-native';

import { View } from '../../components/Themed';
import InputHour from '../../components/leaf/InputHour';

export default function TabOneScreen() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled' scrollEnabled={false}>
      <View style={styles.container}>
        <InputHour label='Time' />
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
