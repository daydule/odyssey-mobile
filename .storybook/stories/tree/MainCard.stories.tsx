import React from 'react';
import { View, Text } from 'react-native';
import MainCard from '../../../components/tree/MainCard';
import { Meta } from '@storybook/react-native';
import NumericInput from '../../../components/leaf/NumericInput';

const MainCardMeta: Meta<typeof MainCard> = {
  title: 'Tree/MainCard',
  component: MainCard,
  argTypes: {
    title: { control: 'text' },
    headerBgColor: { control: 'color' },
    // TODO: childrenを有効化すると、storybookのpreviewが表示されなくなる問題の解消
    // children: { control: 'none' },
  },
  decorators: [
    (Story) => (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', padding: 25 }}>
        <Story />
      </View>
    ),
  ],
};

export default MainCardMeta;

export const Default = {
  args: {
    title: 'Default Title',
    headerBgColor: 'blue',
    // children: (
    //   <View>
    //     <Text>Children</Text>
    //   </View>
    // ),
  },
};

export const CustomTitleAndColor = {
  args: {
    title: 'Custom Title',
    headerBgColor: 'green',
  },
};

export const NoChildren = {
  args: {
    title: 'No Children',
    headerBgColor: 'red',
    children: undefined,
  },
};
