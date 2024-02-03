import React from 'react';
import { View } from 'react-native';
import NumericInput from './NumericInput';
import { Meta } from '@storybook/react-native';

const NumericInputMeta: Meta<typeof NumericInput> = {
  title: 'Leaf/NumericInput',
  component: NumericInput,
  argTypes: {
    label: { control: 'text' },
    unit: { control: 'text' },
    unitPosition: { control: { type: 'radio' }, options: ['left', 'right'] },
  },
  decorators: [
    (Story) => (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: 20,
        }}
      >
        <Story />
      </View>
    ),
  ],
};

export default NumericInputMeta;

export const TimeInput = {
  args: {
    label: 'Time',
    unit: 'h',
    unitPosition: 'right',
  },
};

export const HourlyWageInput = {
  args: {
    label: '時給',
    unit: '¥',
    unitPosition: 'left',
  },
};
