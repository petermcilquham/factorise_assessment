import { Text, View } from 'react-native';
import { TaskForm } from '@/components/taskForm';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TaskForm />
    </View>
  );
}
