import { ScrollView, StyleSheet, useWindowDimensions, FlatList, Keyboard } from 'react-native';

import { View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import ArrowButton from '../leaf/ArrowButton';
import MainCardWithInput from '../tree/MainCardWithInput';
import PriceContext from './PriceContext';
import MainCardWithMoneyResult from '../tree/MainCardWithMoneyResult';
import MainCardWithCommodity from '../tree/MainCardWithCommodity';

type SlideType = {
  id: string;
};

const slides: SlideType[] = [
  {
    id: 'input',
  },
  {
    id: 'moneyResult',
  },
  {
    id: 'commodity',
  },
];

export default function Main() {
  const { width } = useWindowDimensions();
  const flatListRef = useRef<FlatList<SlideType>>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [keyboardActive, setKeyboardActive] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardActive(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardActive(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const _renderItem = ({ item }: { item: SlideType }) => {
    const getMainCard = () => {
      switch (item.id) {
        case 'input':
          return <MainCardWithInput onPressTimeIsMoney={scrollToNextSlide} />;
        case 'moneyResult':
          return <MainCardWithMoneyResult />;
        case 'commodity':
          return <MainCardWithCommodity />;
      }
    };
    return (
      <View style={StyleSheet.create({ cardContainer: { width: width } }).cardContainer}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled' scrollEnabled={false}>
          <View style={[styles.container, keyboardActive && styles.contentScaled]}>
            <ArrowButton direction='left' onClick={scrollToPreviousSlide} />
            {getMainCard()}
            <ArrowButton direction='right' onClick={scrollToNextSlide} />
          </View>
        </ScrollView>
      </View>
    );
  };

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollToPreviousSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      flatListRef.current?.scrollToIndex({ index: currentIndex - 1 });
    }
  };

  const scrollToNextSlide = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
    }
  };

  return (
    <PriceContext>
      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={_renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={true}
        viewabilityConfig={viewConfig}
      />
    </PriceContext>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 45,
  },
  contentScaled: {
    transform: [{ scale: 0.7 }, { translateY: -145 }],
  },
});
