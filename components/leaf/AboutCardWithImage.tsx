import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Images from '../../constants/Images';

type Props = {
  imageName: string;
  title: string;
  text: string;
};

const AboutCardWithImage = ({ imageName, title, text }: Props) => {
  const image = Images[imageName];

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image} />
      </View>
      <View style={styles.aboutContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.body}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 500,
    width: '100%',
    borderRadius: 50,
    backgroundColor: 'white',
    boxShadow: '5px 5px 5px 0px rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 3.84,
  },
  imageContainer: {
    height: 250,
    width: '100%',
    textAlign: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: 'gray',
    resizeMode: 'cover',
  },
  aboutContainer: {
    width: '100%',
    textAlign: 'center',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    padding: 24,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '500',
  },
  body: {
    marginTop: 32,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
  },
});

export default AboutCardWithImage;
