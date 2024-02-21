import React, { useRef, useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type Props = {
  label: string;
  unit: string;
  unitPosition: 'left' | 'right';
  value: number;
  handleTextChange: (input: string) => void;
};

const convertValueToDisplayText = (unit: string, unitPosition: 'left' | 'right', value: number) => {
  const formattedValue = value.toLocaleString();
  return unitPosition === 'left' ? `${unit}${formattedValue}` : `${formattedValue}${unit}`;
};

const NumericInput = (props: Props) => {
  const inputRef = useRef<TextInput | null>(null);
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
    props.handleTextChange(numericInput);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>{props.label}</Text>
        <View style={styles.innerInputContainer}>
          <TextInput
            ref={inputRef}
            style={styles.input}
            placeholder='入力してください'
            value={convertValueToDisplayText(props.unit, props.unitPosition, props.value)}
            placeholderTextColor='#aaa'
            keyboardType='numeric'
            onChangeText={handleTextChanged}
            textAlign='right'
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
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
    width: '100%',
    fontSize: 16,
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
