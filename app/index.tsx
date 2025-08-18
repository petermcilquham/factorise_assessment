import { Text, View, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { Tasks } from '@/components/tasks';

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#f4511e'></StatusBar>
      <View style={styles.header}>
        <Text style={styles.headerText}>Task Form</Text>
      </View>
      <View style={styles.body}>
        <Tasks />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdc29f62',
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
