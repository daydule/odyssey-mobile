import React from 'react';
import { View, StyleSheet } from 'react-native';
import InputHour from '../../../components/leaf/InputHour';
import { Meta } from '@storybook/react-native';

const InputHourMeta: Meta<typeof InputHour> = {
  title: 'Leaf/InputHour',
  component: InputHour,
  argTypes: {
    label: { control: 'text' },
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: 'white' }}>
        <Story />
      </View>
    ),
  ],
};

export default InputHourMeta;

export const Default = {
  args: {
    label: 'Time',
  },
};

export const CustomLabel = {
  args: {
    label: 'Custom',
  },
};
