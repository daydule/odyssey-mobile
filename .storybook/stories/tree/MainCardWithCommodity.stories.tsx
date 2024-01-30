import React from 'react';
import { View } from 'react-native';
import MainCardWithCommodity from '../../../components/tree/MainCardWithCommodity';
import { Meta } from '@storybook/react-native';

const MainCardWithCommodityMeta: Meta<typeof MainCardWithCommodity> = {
  title: 'Tree/MainCardWithCommodity',
  component: MainCardWithCommodity,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', padding: 25 }}>
        <Story />
      </View>
    ),
  ],
};

export default MainCardWithCommodityMeta;

export const Default = {};
