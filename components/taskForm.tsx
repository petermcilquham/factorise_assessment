import { StyleSheet, View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useState } from 'react';
import { Input } from './input';
import { TaskList } from './taskList';

export interface Task {
  title: string;
  description?: string | null;
  priority: string | null;
}

export function TaskForm() {
  const [taskList, setTaskList] = useState<Task[]>([]);

  return (
    <View style={styles.taskForm}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior='padding'>
          <Input taskList={taskList} setTaskList={setTaskList}></Input>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
      {taskList ? <TaskList taskList={taskList} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  taskForm: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
