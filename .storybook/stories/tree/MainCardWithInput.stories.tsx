import React from 'react';
import { Story, Meta } from '@storybook/react-native';
import MainCardWithInput from '../../../components/tree/MainCardWithInput';
import { View } from 'react-native';

const MainCardWithInputMeta: Meta<typeof MainCardWithInput> = {
  title: 'Tree/MainCardWithInput',
  component: MainCardWithInput,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', padding: 25 }}>
        <Story />
      </View>
    ),
  ],
};

export default MainCardWithInputMeta;

export const Default = {};
