import { StyleSheet, View, Pressable, Text } from 'react-native';
import { useState, useEffect, useRef, useContext } from 'react';
import { Input } from './input';
import { PriorityDropDown } from './priorityDropDown';
import { TaskContext, TaskListContext, useTask } from '@/contexts/taskContexts';

interface Errors {
  title?: string;
  description?: string;
}

/// This function returns a box with text and dropdown inputs and a button to submit the input. It also handles task and error states for the inputs.
export function TaskForm() {
  /// useContext and task hook
  const { taskList, setTaskList } = useContext(TaskListContext);
  const { task, setTask } = useTask();

  /// useStates and useRefs
  const [errors, setErrors] = useState<Errors>({} as Errors);
  const [priorityValue, setPriorityValue] = useState<string>('');
  const isFormValidated = useRef<boolean>(false);
  isFormValidated.current = Object.keys(errors).length === 0; // if setErrors has not been called in the useEffect function,
  // then all properties in errors state will have a length of 0 and isFormValidated will be set to true, and if any errorMessage has been set, it will be false.

  /// Functions
  // this function adds current task to taskList and then resets all values
  function handleSubmit() {
    setTaskList([...taskList, task]);
    setTask({ title: '', description: '', priority: '' });
    setErrors({});
    setPriorityValue('');
  }
  // this effect runs every time task state updates
  useEffect(() => {
    let errorMessage: Errors = {};
    // if title is under 3 characters long, set error message
    if (task.title.length < 3) errorMessage.title = 'Title must be at least 3 characters long';
    setErrors(errorMessage);

    // if priority has not been selected, set it to 4 to sort last. would have preferred to put this in handleSubmit, but for some reason it doesn't work there,
    // but works here
    if (task.priority.length === 0) {
      setPriorityValue('4');
    }
  }, [task]);

  return (
    <View style={styles.form}>
      <TaskContext value={{ task, setTask }}>
        <Input isTitle={true} isFormValidated={isFormValidated} />
        <Input isTitle={false} isFormValidated={isFormValidated} />
      </TaskContext>
      <PriorityDropDown onSelect={(val: string) => setTask({ ...task, priority: val })} value={priorityValue} setValue={setPriorityValue} />
      {task.title.length !== 0 && !isFormValidated.current ? <Text style={styles.errorText}>{errors.title}</Text> : null}
      {task.description!.length !== 0 && !isFormValidated.current && errors.description! ? <Text style={styles.errorText}>{errors.description}</Text> : null}
      <Pressable onPress={handleSubmit} style={[styles.submitButton, !isFormValidated.current ? styles.disabled : null]} disabled={!isFormValidated.current}>
        <Text>Submit Task</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    alignItems: 'center',
    gap: 20,
    padding: 30,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 280,
  },
  submitButton: {
    borderColor: '#000',
    borderStyle: 'solid',
    borderWidth: 1,
    width: 120,
    height: 40,
    backgroundColor: '#fdc19f44',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabled: {
    opacity: 0.3,
    borderColor: 'grey',
  },
  errorText: {
    fontSize: 12,
    color: 'red',
  },
});
