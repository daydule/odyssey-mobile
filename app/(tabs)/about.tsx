import { ScrollView, StyleSheet } from 'react-native';

import AboutCardWithImage from '../../components/leaf/AboutCardWithImage';
import { View } from 'react-native';
export default function TabTwoScreen() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled' scrollEnabled={true}>
      <View style={styles.container}>
        <View style={styles.aboutCardTop}>
          <AboutCardWithImage
            imageName='icon_negate'
            title='Time is Money'
            text='テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト'
          />
        </View>
        <View style={styles.aboutCardNonTop}>
          <AboutCardWithImage
            imageName='icon_negate'
            title='Time is Money'
            text='テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト'
          />
        </View>
        <View style={styles.aboutCardNonTop}>
          <AboutCardWithImage
            imageName='icon_negate'
            title='Time is Money'
            text='テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト'
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
    backgroundColor: 'white',
  },
  aboutCardTop: {
    width: '100%',
  },
  aboutCardNonTop: {
    width: '100%',
    marginTop: 30,
  },
});
