import { fireEvent, render, renderHook, screen } from '@testing-library/react-native';

import { useTask } from '@/contexts/taskContexts';
import { PriorityDropDown } from '@/components/priorityDropDown';

test('Dropdown options renders correctly on PriorityDropDown component screen after dropDown has been clicked', () => {
  const { result } = renderHook(() => useTask());
  const task = result.current.task;
  const setTask = result.current.setTask;
  const priorityValue = '';
  const setPriorityValue = () => {};

  render(<PriorityDropDown onSelect={(val: string) => setTask({ ...task, priority: val })} value={priorityValue} setValue={setPriorityValue} />);

  const dropDownBtn = screen.getByText('Priority');
  fireEvent.press(dropDownBtn);
  screen.getByText('1');
  screen.getByText('2');
  screen.getByText('3');
});
