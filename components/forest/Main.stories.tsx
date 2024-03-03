import { View, StyleSheet, ImageBackground } from 'react-native';
import Main from './Main';
import Images from '../../constants/Images';
import { Meta, StoryObj } from '@storybook/react-native';
import { ComponentProps } from 'react';

const MainMeta: Meta<typeof Main> = {
  title: 'Forest/Main',
  component: Main,
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

export default MainMeta;

type Story = StoryObj<typeof MainMeta> & { args: ComponentProps<typeof Main> };

export const Default: Story = {
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
