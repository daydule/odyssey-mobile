import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Images from '../../constants/Images';

export const Header = () => {
  const headerImage = Images['header_logo'];
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={headerImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: 260,
  },
  image: {
    height: '100%',
    width: '100%',
    objectFit: 'contain',
  },
});
