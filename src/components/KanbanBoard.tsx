import React, { useReducer, useEffect } from 'react';
import { TaskWithStatus, initialTasks, mapTaskToStatus } from '../types';
import Column from './Column';
import './KanbanBoard.css';

type Action = 
  | { type: 'MOVE_TASK'; taskId: number; newStatus: TaskWithStatus['status'] }
  | { type: 'LOAD_TASKS'; tasks: TaskWithStatus[] };

const taskReducer = (state: TaskWithStatus[], action: Action): TaskWithStatus[] => {
  switch (action.type) {
    case 'MOVE_TASK':
      return state.map(task => 
        task.id === action.taskId 
          ? { ...task, status: action.newStatus }
          : task
      );
    case 'LOAD_TASKS':
      return action.tasks;
    default:
      return state;
  }
};

const KanbanBoard: React.FC = () => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  useEffect(() => {
    const savedTasks = localStorage.getItem('kanban-tasks');
    if (savedTasks) {
      dispatch({ type: 'LOAD_TASKS', tasks: JSON.parse(savedTasks) });
    } else {
      const mappedTasks = initialTasks.map(mapTaskToStatus);
      dispatch({ type: 'LOAD_TASKS', tasks: mappedTasks });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('kanban-tasks', JSON.stringify(tasks));
  }, [tasks]);

  const moveTask = (taskId: number, newStatus: TaskWithStatus['status']) => {
    dispatch({ type: 'MOVE_TASK', taskId, newStatus });
  };

  const todoTasks = tasks.filter(task => task.status === 'todo');
  const inProgressTasks = tasks.filter(task => task.status === 'in-progress');
  const doneTasks = tasks.filter(task => task.status === 'done');

  return (
    <div className="kanban-board">
      <Column 
        title="To Do" 
        tasks={todoTasks} 
        status="todo"
        onMoveTask={moveTask}
      />
      <Column 
        title="In Progress" 
        tasks={inProgressTasks} 
        status="in-progress"
        onMoveTask={moveTask}
      />
      <Column 
        title="Done" 
        tasks={doneTasks} 
        status="done"
        onMoveTask={moveTask}
      />
    </div>
  );
};

export default KanbanBoard;
