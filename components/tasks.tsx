import { StyleSheet, View } from 'react-native';
import { TaskListContext, useTaskList } from '@/contexts/taskContexts';
import { TaskForm } from './taskForm';
import { TaskList } from './taskList';

/// This function returns the taskForm component, which holds all the input and submit button, and the taskList component, which holds the taskList.
export function Tasks() {
  /// taskList hook
  const { taskList, setTaskList } = useTaskList();

  return (
    <View style={styles.taskForm}>
      <TaskListContext value={{ taskList, setTaskList }}>
        <TaskForm />
      </TaskListContext>
      {/* only show TaskList component if taskList has elements */}
      {taskList.length > 0 ? (
        <TaskListContext value={{ taskList, setTaskList }}>
          <TaskList />
        </TaskListContext>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  taskForm: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});
