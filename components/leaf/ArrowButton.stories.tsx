// ArrowButton.stories.tsx
import React, { ComponentProps } from 'react';
import { View } from 'react-native';
import ArrowButton from './ArrowButton';
import { Meta, StoryObj } from '@storybook/react-native';

const ArrowButtonMeta: Meta<typeof ArrowButton> = {
  title: 'Leaf/ArrowButton',
  component: ArrowButton,
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: 'white' }}>
        <Story />
      </View>
    ),
  ],
  argTypes: {
    direction: { control: 'select', options: ['right', 'left'] },
  },
};

export default ArrowButtonMeta;

type Story = StoryObj<typeof ArrowButtonMeta> & { args: ComponentProps<typeof ArrowButton> };

export const RightArrow: Story = {
  args: {
    direction: 'right',
    onClick: () => console.log('Right arrow clicked'),
  },
};

export const LeftArrow: Story = {
  args: {
    direction: 'left',
    onClick: () => console.log('Left arrow clicked'),
  },
};
