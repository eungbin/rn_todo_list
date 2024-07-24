import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IconButton from './IconButton';
import { CheckBoxBlankImg, CheckBoxImg, EditImg, DeleteImg } from '../images/Images';

type TaskType = {
  text: string;
  completed: boolean;
}

interface ITask {
  task: TaskType;
  deleteTask: any;
  updateTaskStatus: any;
  index: number;
}

export default function Task({ task, deleteTask, index, updateTaskStatus }: ITask) {
  return (
    <View style={styles.taskContainer}>
      <View style={styles.taskInnerLeftContainer}>
        {task.completed ? <IconButton image={CheckBoxImg} onPressOut={updateTaskStatus} index={index} /> :
        <IconButton image={CheckBoxBlankImg} onPressOut={updateTaskStatus} index={index} />}
        <Text style={task.completed ? styles.completed : styles.taskText}>{task.text}</Text>
      </View>
      <View style={styles.taskInnerRightContainer}>
        <IconButton image={EditImg} />
        <IconButton image={DeleteImg} onPressOut={deleteTask} index={index} />
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
  },
  completed: {
    fontSize: 20,
    paddingBottom: 4,
    color: 'gray',
    textDecorationLine: 'line-through',
  },
})