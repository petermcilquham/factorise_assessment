import { StyleSheet, TextInput, View, Pressable, Text, KeyboardAvoidingView, FlatList } from 'react-native';
import { useState, useEffect, useRef } from 'react';

interface Task {
  title: string;
  description?: string;
}
interface Errors {
  title?: string;
  description?: string;
}
export function TaskForm() {
  // states and ref
  const [task, setTask] = useState<Task>({ title: '', description: '' } as Task);
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [errors, setErrors] = useState<Errors>({} as Errors);
  const isFormValidated = useRef(false);
  isFormValidated.current = Object.keys(errors).length === 0;

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

  return (
    <View style={styles.taskForm}>
      <KeyboardAvoidingView behavior='padding'>
        <View style={styles.form}>
          <TextInput
            style={[styles.input, task.title.length !== 0 && !isFormValidated.current ? styles.redBorder : null]}
            value={task.title}
            onChangeText={(text) => setTask({ ...task, title: text })}
            placeholder='Task title'
          />
          <TextInput multiline={true} numberOfLines={4} style={styles.input} value={task.description} onChangeText={(text) => setTask({ ...task, description: text })} placeholder='Task description' />
          {task.title.length !== 0 && !isFormValidated.current ? <Text style={styles.errorText}>{errors.title}</Text> : null}
          {task.description!.length !== 0 && !isFormValidated.current ? <Text style={styles.errorText}>{errors.description!}</Text> : null}
          <Pressable onPress={handleSubmit} style={[styles.submitButton, !isFormValidated.current ? styles.disabled : null]} disabled={!isFormValidated.current}>
            <Text>Submit Task</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
      {taskList ? (
        <FlatList
          style={styles.listContainer}
          data={taskList}
          renderItem={({ item }) => {
            return (
              <View style={styles.listItem}>
                <Text style={styles.listItemText}>
                  <Text style={{ fontWeight: 'bold' }}>Title: </Text>
                  {item.title}
                </Text>
                <Text style={styles.listItemText}>
                  <Text style={{ fontWeight: 'bold' }}>Description: </Text>
                  {item.description}
                </Text>
              </View>
            );
          }}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  taskForm: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
    backgroundColor: '#E1E1E1',
    borderRadius: 20,
    paddingLeft: 10,
  },
  submitButton: {
    marginTop: 10,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    width: 120,
    height: 40,
    backgroundColor: '#E1E1E1',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabled: {
    opacity: 0.3,
    borderColor: 'grey',
  },
  redBorder: {
    borderColor: 'tomato',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  errorText: {
    color: 'tomato',
  },
  listContainer: {
    flexGrow: 0,
    height: 200,
    minWidth: 150,
    marginTop: 20,
  },
  listItem: {
    marginTop: 15,
  },
  listItemText: {
    fontSize: 14,
  },
});
