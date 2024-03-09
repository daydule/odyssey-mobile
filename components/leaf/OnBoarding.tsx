import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text, FlatList, useWindowDimensions, Button } from 'react-native';

type SlideType = { id: string; title: string; description: string };

const slides: SlideType[] = [
  {
    id: '1',
    title: 'beef',
    description: 'grilled beef on the plate',
  },
  {
    id: '2',
    title: 'chicken',
    description: 'grilled chicken on the plate',
  },
  {
    id: '3',
    title: 'pork',
    description: 'grilled pork on the plate',
  },
  {
    id: '4',
    title: 'fish',
    description: 'grilled fish on the plate',
  },
  {
    id: '5',
    title: 'vegetables',
    description: 'grilled vegetables on the plate',
  },
];

const Onboarding = () => {
  const { width } = useWindowDimensions();
  const flatListRef = useRef<FlatList<SlideType>>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const _renderItem = ({ item }: { item: SlideType }) => {
    return (
      <View style={StyleSheet.create({ cardContainer: { width: width } }).cardContainer}>
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.text}>{item.description}</Text>
      </View>
    );
  };

  const viewableItemsChanged = useRef(({ viewableItems }: { viewableItems: unknown }) => {
    console.log(viewableItems);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 5000 }).current;

  const scrollToNextSlide = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
    }
  };

  const scrollToPreviousSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      flatListRef.current?.scrollToIndex({ index: currentIndex - 1 });
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={_renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={true}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
      />
      <View style={styles.buttonContainer}>
        <Button title='Previous' onPress={scrollToPreviousSlide} disabled={currentIndex === 0} />
        <Button title='Next' onPress={scrollToNextSlide} disabled={currentIndex === slides.length - 1} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 100,
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 16,
  },
});

export default Onboarding;
