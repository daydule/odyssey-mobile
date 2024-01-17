import React from 'react';
import { View, Image, Text, StyleSheet, ImageSourcePropType } from 'react-native';
import Images from '../../constants/Images';

interface Props {
  imageUrl: string;
  imageAccessibilityLabel: string;
  upperText: string;
  lowerText: string;
}

const CommodityCard: React.FC<Props> = ({ imageUrl, imageAccessibilityLabel, upperText, lowerText }) => {
  const imageSource = Images['icon_negate'];

  return (
    <View style={styles.card}>
      <Image source={imageSource} accessibilityLabel={imageAccessibilityLabel} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.upperText} numberOfLines={2}>
          {upperText}
        </Text>
        <View style={styles.lowerTextContainer}>
          <Text style={styles.lowerText}>{lowerText}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    width: 281,
    height: 120,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    padding: 10,
  },
  upperText: {
    flex: 1,
    textAlign: 'left',
    textAlignVertical: 'top',
    overflow: 'hidden',
    fontSize: 16,
  },
  lowerTextContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  lowerText: {
    fontSize: 18,
  },
});

export default CommodityCard;
