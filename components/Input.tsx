import React from 'react';
import { StyleSheet, TextInput, Dimensions } from 'react-native';

interface IInput {
  onChangeText?: any
  value?: string
  onSubmitEditing?: any
}

export default function Input({ onChangeText, value, onSubmitEditing }: IInput): React.JSX.Element {
  return (
    <TextInput onChangeText={(value) => onChangeText(value)} value={value} onSubmitEditing={onSubmitEditing}
     style={styles.input} placeholder='+ Add a Task' maxLength={50} />
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 20,
    backgroundColor: '#f1f3f5',
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
    marginTop: 8,
    marginBottom: 8,
    alignItems: 'center',
  }
})