import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IconButton from './IconButton';
import { CheckBoxBlankImg, CheckBoxImg, EditImg, DeleteImg } from '../images/Images';

type TaskType = {
  task: string
}

export default function Task({ task }: TaskType) {
  return (
    <View style={styles.taskContainer}>
      <View style={styles.taskInnerLeftContainer}>
        <IconButton image={CheckBoxBlankImg} />
        <Text style={styles.taskText}>{task}</Text>
      </View>
      <View style={styles.taskInnerRightContainer}>
        <IconButton image={EditImg} />
        <IconButton image={DeleteImg} />
      </View>
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
  taskInnerLeftContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },
  taskInnerRightContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  taskText: {
    fontSize: 20,
    paddingBottom: 4
  }
})