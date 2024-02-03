import React from 'react';
import { Meta } from '@storybook/react-native';
import OdysseyButton from './OdysseyButton';
import { View } from 'react-native';

const OdysseyButtonMeta: Meta<typeof OdysseyButton> = {
  title: 'Leaf/OdysseyButton',
  component: OdysseyButton,
  argTypes: {
    label: { control: 'text' },
    onPress: { action: 'clicked' },
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', height: 54 }}>
        <Story />
      </View>
    ),
  ],
};

export default OdysseyButtonMeta;

export const Default = {
  args: {
    label: 'Click me',
    onPress: () => console.log('Storybook Button clicked'),
  },
};
