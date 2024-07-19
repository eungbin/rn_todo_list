import React from 'react';
import { StyleSheet, Text } from 'react-native';

type TitleType = {
  title: string
}

export default function Title({ title }: TitleType): React.JSX.Element {
  return (
    <Text style={styles.title}>{title}</Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  }
})