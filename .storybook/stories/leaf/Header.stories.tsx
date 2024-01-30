import React from 'react';
import { View } from 'react-native';
import { Header } from '../../../components/leaf/Header';
import { Meta, Story } from '@storybook/react-native';

const HeaderMeta: Meta<typeof Header> = {
  title: 'Leaf/Header',
  component: Header,
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: 'white' }}>
        <Story />
      </View>
    ),
  ],
};

export default HeaderMeta;

export const Default = {};
