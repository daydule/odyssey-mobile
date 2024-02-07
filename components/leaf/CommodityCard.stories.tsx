import React from 'react';
import { View } from 'react-native';
import ComodityCard from './CommodityCard';
import { Meta } from '@storybook/react-native';
import Images from '../../constants/Images';

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
    imageUrl: Images['noImage'],
    imageAccessibilityLabel: 'First Comodity Image',
    upperText: 'テストテストテストテストテストテストテストテストテストテストテストテスト',
    lowerText: '$1,000,000',
  },
};
