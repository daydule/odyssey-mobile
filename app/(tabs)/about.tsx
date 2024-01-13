import { View, StyleSheet, ImageBackground } from 'react-native';
import About from '../../components/forest/About';
import React from 'react';

export default function AboutPage() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/about_background_image.png')}
        style={styles.backgroundImage}
      >
        <About />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
});
