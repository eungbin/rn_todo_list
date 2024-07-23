import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IconButton from './IconButton';
import { CheckBoxBlankImg } from '../images/Images';

type TaskType = {
  task: string
}

export default function Task({ task }: TaskType) {
  return (
    <View style={styles.taskContainer}>
      <Text style={styles.taskText}>{task}</Text>
      <IconButton image={CheckBoxBlankImg} />
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  taskText: {
    fontSize: 20,
  }
})