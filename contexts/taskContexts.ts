import { createContext, useContext, useState } from "react";

/// Task context
export interface ITask {
  title: string;
  description?: string | null;
  priority: string;
}
// any type because trying to set an actual type causes erorrs with the TaskContext provider that i couldn't figure out how to fix
export const TaskContext = createContext<any | undefined>(undefined);
// function to handle the context being undefined 
export function useTaskContext() {
  const taskCon = useContext(TaskContext);
  if (taskCon === undefined) {
    throw new Error('useTaskContext must be used with a TaskContext');
  }
  return taskCon;
}
// task hook
export const useTask = () => {
    const [task, setTask] = useState<ITask>({ title: '', description: '', priority: '' } as ITask)
    return {task, setTask}
}

/// Task list context
// any type because trying to set an actual type causes erorrs with the TaskListContext provider that i couldn't figure out how to fix
export const TaskListContext = createContext<any | undefined>(undefined);
// taskList hook
export const useTaskList = () => {
 const [taskList, setTaskList] = useState<ITask[]>([]);
 return {taskList, setTaskList}
}