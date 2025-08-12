import { Text, View, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { TaskForm } from '@/components/taskForm';

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#f4511e'></StatusBar>
      <View style={styles.header}>
        <Text style={styles.headerText}>Task Form</Text>
      </View>
      <View style={styles.body}>
        <TaskForm />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fa732562',
  },
  header: {
    flex: 1,
    backgroundColor: '#f4511e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },
  body: {
    flex: 3,
    marginHorizontal: 30,
  },
});
