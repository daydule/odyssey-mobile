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
        <Text>{label}</Text>
        <View style={styles.innerInputContainer}>
          {unitPosition === 'left' && <Text style={styles.unit}>{unit}</Text>}
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
          {unitPosition === 'right' && <Text style={styles.unit}>{unit}</Text>}
        </View>
        <TouchableOpacity style={styles.iconButton} onPress={isFocused ? handleBlurInput : handleFocusInput}>
          <FontAwesome name={isFocused ? 'check' : 'pencil'} size={12} color={isFocused ? 'green' : 'black'} />
        </TouchableOpacity>
      </View>
      <View style={styles.underline} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 45,
    width: '80%',
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  innerInputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: '80%',
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 20,
  },
  unit: {
    padding: 12,
  },
  iconButton: {
    padding: 10,
  },
  underline: {
    borderBottomWidth: 1,
    borderColor: '#000000',
    width: '100%',
  },
});

export default NumericInput;