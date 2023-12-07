import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import AboutCardWithImage from '../../../components/leaf/AboutCardWithImage';
import { Meta, Story } from '@storybook/react-native';

const AboutCardWithImageMeta: Meta<typeof AboutCardWithImage> = {
  title: 'Leaf/AboutCardWithImage',
  component: AboutCardWithImage,
  argTypes: {
    imageName: { control: 'select', options: ['icon_negate'] }, // Assuming 'icon_negate' is in your Images object
    title: { control: 'text' },
    text: { control: 'text' },
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: 'white', padding: 25 }}>
        <Story />
      </View>
    ),
  ],
};

export default AboutCardWithImageMeta;

export const Default = {
  args: {
    imageName: 'exampleImage1',
    title: 'Example Title 1',
    text: 'This is an example text for the first configuration.',
  },
};

export const ThreeAboutCardStory: Story = () => (
  <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled' scrollEnabled={true}>
    <View style={styles.container}>
      <View style={styles.aboutCardTop}>
        <AboutCardWithImage
          imageName='icon_negate'
          title='Time is Money'
          text='テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト'
        />
      </View>
      <View style={styles.aboutCardNonTop}>
        <AboutCardWithImage
          imageName='icon_negate'
          title='Time is Money'
          text='テストテストテストテストテストテストテストテスト'
        />
      </View>
      <View style={styles.aboutCardNonTop}>
        <AboutCardWithImage
          imageName='icon_negate'
          title='Time is Money'
          text='テストテストテストテストテストテストテストテスト'
        />
      </View>
    </View>
  </ScrollView>
);

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
