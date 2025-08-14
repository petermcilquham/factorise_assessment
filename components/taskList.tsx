import { StyleSheet, FlatList, View, Text } from 'react-native';
import { Task } from './taskForm';

export function TaskList({ taskList }: { taskList: Task[] }) {
  return (
    <FlatList
      style={styles.listContainer}
      data={taskList.sort((a, b) => (a.priority === null ? 1 : b.priority === null ? -1 : a.priority! > b.priority! ? 1 : -1))}
      renderItem={({ item }) => {
        return (
          <View style={styles.listItem}>
            <View style={styles.listItemRow}>
              <Text style={styles.listItemText}>
                <Text style={styles.listItemHeader}>Title: </Text>
                {item.title}
              </Text>
              {item.priority && (
                <Text style={styles.priorityText}>
                  <Text style={[styles.priorityText, { fontWeight: 'bold' }]}>Priority: </Text>
                  {item.priority}
                </Text>
              )}
            </View>
            <Text style={styles.listItemText}>
              <Text style={styles.listItemHeader}>Description: </Text>
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
  listItemRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listItemHeader: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  listItemText: {
    fontSize: 14,
  },
  priorityText: {
    fontSize: 10,
  },
});
