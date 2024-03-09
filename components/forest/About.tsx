import { ScrollView, StyleSheet } from 'react-native';

import AboutCardWithImage from '../../components/leaf/AboutCardWithImage';
import { View } from 'react-native';
import React from 'react';
export default function About() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} scrollEnabled={true}>
      <View style={styles.container}>
        <View style={styles.aboutCardTop}>
          <AboutCardWithImage
            imageName='aboutContentLeftFront'
            title='Time is Money'
            text='まずは自分の収入や時給を入力し、さらに稼働時間を追加します。入力が完了したら、カード下部にある「計算」ボタンをクリックしてみましょう。すると、入力した情報をもとに次のカードに結果が表示されます。'
          />
        </View>
        <View style={styles.aboutCardNonTop}>
          <AboutCardWithImage
            imageName='aboutContentRightFront'
            title='Time is Money'
            text='結果表示用のカードでは、自分の時間がどれくらいの価値になるかがわかります。計算結果と前回の結果を比較して、自分の時間の使い方を考え直すことができます。また、カード内をクリックすると、裏面に切り替わります。'
          />
        </View>
        <View style={styles.aboutCardNonTop}>
          <AboutCardWithImage
            imageName='aboutContentRightBack'
            title='Time is Money'
            text='裏面では、自分の時間が購入できる商品に換算されます。具体的な商品としてイメージすることで、時間の使い方を再考するのに役立ちます。'
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
  },
  aboutCardTop: {
    width: '100%',
  },
  aboutCardNonTop: {
    width: '100%',
    marginTop: 30,
  },
});
