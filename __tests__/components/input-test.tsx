import { render, renderHook, screen } from '@testing-library/react-native';

import { Input } from '@/components/input';
import { TaskContext, useTask } from '@/contexts/taskContexts';

test('Input placeholder text renders correctly on Input component screen', () => {
  const { result } = renderHook(() => useTask());
  const task = result.current.task;
  const setTask = result.current.setTask;

  render(
    <TaskContext value={{ task, setTask }}>
      <Input isTitle={true} isFormValidated={false} />
    </TaskContext>
  );
  screen.getByPlaceholderText('Task title');
  render(
    <TaskContext value={{ task, setTask }}>
      <Input isTitle={false} isFormValidated={false} />
    </TaskContext>
  );
  screen.getByPlaceholderText('Task description');
});
