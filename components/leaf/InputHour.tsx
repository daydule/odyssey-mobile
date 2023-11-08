import React, { useRef, useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type Props = {
  label: string;
};

const InputHour = ({ label }: Props) => {
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
        <Text style={styles.unit}>h</Text>
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
    padding: 10,
    alignItems: 'center',
    height: 60,
    width: '80%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  label: {
    padding: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 20,
  },
  unit: {
    padding: 10,
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

export default InputHour;
