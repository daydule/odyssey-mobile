import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Meta } from '@storybook/react-native';
import About from '../../../components/forest/About';

const AboutMeta: Meta<typeof About> = {
  title: 'Forest/About',
  component: About,
  decorators: [
    (Story) => (
      <View style={styles.container}>
        <ImageBackground
          source={require('../../../assets/images/about_background_image.png')}
          style={styles.backgroundImage}
        >
          <Story />
        </ImageBackground>
      </View>
    ),
  ],
};

export default AboutMeta;

export const Default = {
  args: {},
};

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
