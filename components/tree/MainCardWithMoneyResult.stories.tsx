import React, { ComponentProps } from 'react';
import { View } from 'react-native';
import MainCardWithMoneyResult from './MainCardWithMoneyResult';
import { Meta, StoryObj } from '@storybook/react-native';

const MainCardWithMoneyResultMeta: Meta<typeof MainCardWithMoneyResult> = {
  title: 'Tree/MainCardWithMoneyResult',
  component: MainCardWithMoneyResult,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', padding: 25 }}>
        <Story />
      </View>
    ),
  ],
};

export default MainCardWithMoneyResultMeta;

type Story = StoryObj<typeof MainCardWithMoneyResultMeta> & { args: ComponentProps<typeof MainCardWithMoneyResult> };

export const Default: Story = {
  args: {},
};
