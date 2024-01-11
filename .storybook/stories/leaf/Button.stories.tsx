import React from 'react';
import { Story, Meta } from '@storybook/react-native';
import Button, { Props } from '../../../components/leaf/Button';

export default {
  title: 'Leaf/Button',
  component: Button,
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Click me',
  onPress: () => console.log('Button clicked'),
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  label: 'Click me',
  onPress: () => console.log('Button clicked'),
  // ここにカスタムスタイルを追加します
};
