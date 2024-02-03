import { View, StyleSheet, ImageBackground } from 'react-native';
import Main from './Main';
import Images from '../../constants/Images';
import { Meta } from '@storybook/react-native';

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

export const Default = {};

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
