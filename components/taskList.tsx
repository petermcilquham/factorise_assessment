import { StyleSheet, FlatList, View, Text } from 'react-native';
import { Task } from './taskForm';

export function TaskList({ taskList }: { taskList: Task[] }) {
  return (
    <FlatList
      style={styles.listContainer}
      data={taskList}
      renderItem={({ item }) => {
        return (
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>
              <Text>Title: </Text>
              {item.title}
            </Text>

            <Text style={styles.listItemText}>
              <Text>Description: </Text>
              {item.description}
            </Text>
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  taskForm: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    flexGrow: 0,
    height: 200,
    minWidth: 200,
    marginTop: 20,
  },
  listItem: {
    marginTop: 15,
    flex: 1,
  },
  listItemText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
