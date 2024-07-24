/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import Title from './components/Title';
import Input from './components/Input';
import Task from './components/Task';

type TaskType = {
  text: string;
  completed: boolean;
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
    padding: 20
  };

  const [task, setTask] = useState<TaskType>({ text: '', completed: false });
  const [tasks, setTasks] = useState<TaskType[] | []>([]);

  const _addTask = () => {
    const originTasks = [...tasks];
    originTasks.unshift(task);
    setTasks([...originTasks]);
    setTask({ text: '', completed: false });
  }

  const _handleTextChange = (text: string) => {
    setTask({ text: text, completed: false });
  }

  const _deleteTask = (index: number) => {
    const originTasks = [...tasks];
    originTasks.splice(index, 1);
    setTasks([...originTasks]);
  }

  const _updateTaskStatus = (index: number) => {
    let originTasks = [...tasks];
    originTasks[index].completed = !originTasks[index].completed;
    setTasks([...originTasks]);
  }

  const _updateTaskName = (index: number) => {
    
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Title title={'TO-DO List'} />
        <Input value={task.text} onChangeText={_handleTextChange} onSubmitEditing={_addTask} />
        <ScrollView style={styles.taskList}>
          {tasks.length > 0 ? tasks.map((v, idx) => (
            <Task task={v} key={idx} deleteTask={_deleteTask} updateTaskStatus={_updateTaskStatus} index={idx} />
          )) : null}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  taskList: {
    
  }
});

export default App;
