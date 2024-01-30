import React from 'react';
import { View } from 'react-native';
import ComodityCard from '../../../components/leaf/CommodityCard';
import { Meta } from '@storybook/react-native';

const ComodityCardMeta: Meta<typeof ComodityCard> = {
  title: 'Leaf/ComodityCard',
  component: ComodityCard,
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: 'white' }}>
        <Story />
      </View>
    ),
  ],
};

export default ComodityCardMeta;

export const Default = {
  args: {
    imageAccessibilityLabel: 'First Comodity Image',
    upperText: 'テストテストテストテストテストテストテストテストテストテストテストテスト',
    lowerText: '$1,000,000',
  },
};
