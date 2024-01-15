import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export type Props = {
  label: string;
  onPress: () => void;
};

const OdysseyButton = ({ label, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#cda7ff',
    boxShadow: '1px 1px 1px 0px rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    padding: 12,
  },
  label: {
    color: 'white',
    fontSize: 24,
  },
});

export default OdysseyButton;
