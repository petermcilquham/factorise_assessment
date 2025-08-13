import { StyleSheet, TextInput, View, Pressable, Text } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import { Task } from './taskForm';

interface Errors {
  title?: string;
  description?: string;
}
interface TaskListProps {
  taskList: Task[];
  setTaskList: Function;
}

export function Input({ taskList, setTaskList }: TaskListProps) {
  // states and ref
  const [task, setTask] = useState<Task>({ title: '', description: '' } as Task);
  const [errors, setErrors] = useState<Errors>({} as Errors);
  const isFormValidated = useRef<boolean>(false);
  isFormValidated.current = Object.keys(errors).length === 0;
  const inputRef = useRef<any>(null);

  // functions
  function handleSubmit() {
    setTask({ title: '', description: '' });
    setErrors({});
    setTaskList([...taskList, task]);
  }
  useEffect(() => {
    let errorMessage: Errors = {};
    if (task.title.length < 3) errorMessage.title = 'Title must be at least 3 characters long';
    setErrors(errorMessage);
  }, [task]);
  useEffect(() => {
    inputRef.current.focus();
  }, [task.title]);

  return (
    <View style={styles.form}>
      <TextInput
        ref={inputRef}
        style={[styles.input, task.title.length !== 0 && !isFormValidated.current ? styles.redBorder : null]}
        value={task.title}
        onChangeText={(text) => setTask({ ...task, title: text })}
        placeholder='Task title'
      />
      <TextInput multiline={true} numberOfLines={4} style={styles.input} value={task.description} onChangeText={(text) => setTask({ ...task, description: text })} placeholder='Task description' />
      {/* <TextInput style={styles.input} value={task.description} onChangeText={(text) => setTask({ ...task, description: text })} placeholder='Task description' /> */}
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
  },
  input: {
    width: 200,
    backgroundColor: '#fdc19f44',
    borderRadius: 20,
    paddingLeft: 10,
  },
  submitButton: {
    borderColor: 'black',
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
  redBorder: {
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  errorText: {
    color: 'red',
  },
});
