import React from 'react';
import { StyleSheet, TextInput, Dimensions } from 'react-native';

export default function Input(): React.JSX.Element {
  return (
    <TextInput style={styles.input} placeholder='+ Add a Task' maxLength={50} />
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