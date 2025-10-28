import React, { useDrop } from 'react-dnd';
import { TaskWithStatus } from '../types';
import TaskCard from './TaskCard';

interface ColumnProps {
  title: string;
  tasks: TaskWithStatus[];
  status: TaskWithStatus['status'];
  onMoveTask: (taskId: number, newStatus: TaskWithStatus['status']) => void;
}

const Column: React.FC<ColumnProps> = ({ title, tasks, status, onMoveTask }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'task',
    drop: (item: { id: number }) => {
      onMoveTask(item.id, status);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div 
      ref={drop}
      className={`column ${isOver ? 'column--over' : ''}`}
    >
      <div className="column-header">
        <h3 className="column-title">{title}</h3>
        <span className="column-count">({tasks.length})</span>
      </div>
      <div className="column-content">
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Column;
