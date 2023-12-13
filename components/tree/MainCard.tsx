import React, { ReactNode } from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  children: ReactNode;
  title: string;
  headerBgColor: string;
};

const MainCard = ({ children, title, headerBgColor }: Props) => {
  const styles = StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
      flexDirection: 'column',
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
      height: 50,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      backgroundColor: headerBgColor,
    },
    headerText: {
      marginHorizontal: 10,
    },
    childrenContainer: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <View style={styles.childrenContainer}>{children}</View>
    </View>
  );
};

export default MainCard;
