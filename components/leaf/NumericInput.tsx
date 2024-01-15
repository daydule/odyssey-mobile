import React, { useRef, useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type Props = {
  label: string;
  unit: string;
  unitPosition: 'left' | 'right';
};

const NumericInput = ({ label, unit, unitPosition }: Props) => {
  const inputRef = useRef<TextInput | null>(null);
  const [text, setText] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleFocusInput = () => {
    inputRef.current?.focus();
    setIsFocused(true);
  };

  const handleBlurInput = () => {
    inputRef.current?.blur();
    setIsFocused(false);
  };

  const handleTextChanged = (input: string) => {
    const numericInput = input.replace(/[^0-9]/g, '');
    setText(numericInput);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.innerInputContainer}>
          <Text style={styles.unit}>{unitPosition === 'left' ? unit : ''}</Text>
          <TextInput
            ref={inputRef}
            style={styles.input}
            placeholder='入力してください'
            value={text}
            placeholderTextColor='#aaa'
            keyboardType='numeric'
            onChangeText={handleTextChanged}
            textAlign='right'
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <Text style={styles.unit}>{unitPosition === 'right' ? unit : ''}</Text>
        </View>
        <TouchableOpacity style={styles.iconButton} onPress={isFocused ? handleBlurInput : handleFocusInput}>
          <FontAwesome name={isFocused ? 'check' : 'pencil'} size={20} color={isFocused ? 'green' : 'lightgray'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 45,
    width: '100%',
    marginTop: 5,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    width: '100%',
  },
  label: {
    width: '20%',
    fontSize: 22,
    color: '#7e7e7e',
    fontWeight: 'bold',
  },
  innerInputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: '65%',
  },
  input: {
    flex: 1,
    height: 40,
    width: '90%',
    fontSize: 16,
    color: '#7e7e7e',
  },
  unit: {
    padding: 12,
    width: '5%',
    color: '#7e7e7e',
  },
  iconButton: {
    padding: 10,
    width: '15%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NumericInput;
