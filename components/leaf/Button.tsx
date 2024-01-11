import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export type Props = {
  label: string;
  onPress: () => void;
};

const Button: React.FC<Props> = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: 'blue',
    boxShadow: '1px 1px 1px 0px rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    padding: 10,
  },
  label: {
    color: 'white',
  },
});

export default Button;
