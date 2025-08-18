import { useTaskContext } from '@/contexts/taskContexts';
import { useEffect, useRef } from 'react';
import { StyleSheet, TextInput } from 'react-native';

/// This function returns a textinput, either for the title or for description depending on if the prop isTitle is true. If more input fields were added at some point
/// this would need to be refactored to include more props instead of just returning one of two options.
export function Input({ isTitle, isFormValidated }: { isTitle: boolean; isFormValidated: any }) {
  /// useContext and useRef
  const { task, setTask } = useTaskContext();
  const inputRef = useRef<any>(null);

  // this useEffect sets the focus on title when the title changes, ie. when data is submitted focus goes back to the title.
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [task.title]);

  if (isTitle) {
    return (
      <TextInput
        ref={inputRef}
        // red border on the title if title length is higher than 0 and form isn't validated
        style={[styles.input, task.title.length !== 0 && !isFormValidated.current ? styles.redBorder : null]}
        value={task.title}
        onChangeText={(text) => setTask({ ...task, title: text })}
        placeholder='Task title'
      />
    );
  } else {
    return (
      // Description input is multiline
      <TextInput
        multiline={true}
        numberOfLines={4}
        style={styles.input}
        value={task.description!}
        onChangeText={(text) => setTask({ ...task, description: text })}
        placeholder='Task description'
      />
    );
  }
}

const styles = StyleSheet.create({
  input: { width: 200, backgroundColor: '#fdc19f44', borderRadius: 20, paddingLeft: 10 },
  redBorder: { borderColor: 'red', borderStyle: 'solid', borderWidth: 1 },
});
