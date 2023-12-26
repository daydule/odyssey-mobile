import React from 'react';
import { Pressable } from 'react-native';
import Svg, { Path } from 'react-native-svg';

type Props = {
  direction: 'right' | 'left';
  onClick: () => void;
};

const ArrowButton = ({ direction, onClick }: Props) => {
  const rightArrow = () => (
    <Pressable onPress={() => onClick()}>
      <Svg width='30' height='70' viewBox='0 0 30 70' fill='none'>
        <Path d='M8.18182 0L0 13.125L13.6364 35L0 56.875L8.18182 70L30 35L8.18182 0Z' fill='#898989' />
      </Svg>
    </Pressable>
  );
  const leftArrow = () => (
    <Pressable onPress={() => onClick()}>
      <Svg width='30' height='70' viewBox='0 0 30 70' fill='none'>
        <Path d='M21.8182 0L0 35L21.8182 70L30 56.875L16.3636 35L30 13.125L21.8182 0Z' fill='#898989' />
      </Svg>
    </Pressable>
  );
  return direction === 'right' ? rightArrow() : leftArrow();
};

export default ArrowButton;
