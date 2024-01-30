import React, { ReactNode } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Svg, Circle } from 'react-native-svg';

type Props = {
  children: ReactNode;
  title: string;
  headerBgColor: string;
};

const MainCard = ({ children, title, headerBgColor }: Props) => {
  return (
    <View style={styles.container}>
      <View style={[styles.headerContainer, { backgroundColor: headerBgColor }]}>
        <Svg height='16' width='16'>
          <Circle cx='8' cy='8' r='8' fill='white' />
        </Svg>
        <Text style={styles.headerText}>{title}</Text>
        <Svg height='16' width='16'>
          <Circle cx='8' cy='8' r='8' fill='white' />
        </Svg>
      </View>
      <View style={styles.childrenContainer}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    borderRadius: 25,
    backgroundColor: 'white',
    boxShadow: '5px 5px 5px 0px rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 3.84,
  },
  headerContainer: {
    height: '8%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    flexDirection: 'row',
  },
  headerText: {
    marginHorizontal: 10,
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 16,
  },
  childrenContainer: {
    width: '100%',
    height: '92%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MainCard;
