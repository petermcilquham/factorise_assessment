import { render, renderHook, screen } from '@testing-library/react-native';

import { TaskForm } from '@/components/taskForm';
import { TaskListContext, useTaskList } from '@/contexts/taskContexts';

test('Button text renders correctly on TaskForm screen', () => {
  const { result } = renderHook(() => useTaskList());
  const taskList = result.current.taskList;
  const setTaskList = result.current.setTaskList;

  render(
    <TaskListContext value={{ taskList, setTaskList }}>
      <TaskForm />
    </TaskListContext>
  );

  screen.getByText('Submit Task');
});
