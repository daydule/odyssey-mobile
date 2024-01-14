import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Meta } from '@storybook/react-native';
import About from '../../../components/forest/About';
import Images from '../..//../constants/Images';

const AboutMeta: Meta<typeof About> = {
  title: 'Forest/About',
  component: About,
  decorators: [
    (Story) => (
      <View style={styles.container}>
        <ImageBackground source={Images.aboutBackground} style={styles.backgroundImage}>
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
