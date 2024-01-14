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
          <FontAwesome name={isFocused ? 'check' : 'pencil'} size={20} color={isFocused ? 'green' : 'black'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 45,
    width: '80%',
    marginTop: 5,
    borderBottomWidth: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  label: {
    width: '20%',
    fontSize: 16,
    marginLeft: 5,
  },
  innerInputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: '80%',
  },
  input: {
    flex: 1,
    height: 40,
    width: '75%',
    fontSize: 16,
  },
  unit: {
    padding: 12,
    width: '10%',
  },
  iconButton: {
    padding: 10,
    width: '15%',
  },
});

export default NumericInput;
