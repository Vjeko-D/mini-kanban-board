import React from 'react';
import { useDrag } from 'react-dnd';
import { TaskWithStatus } from '../types';

interface TaskCardProps {
  task: TaskWithStatus;
}

const getPriorityBadgeClass = (id: number): string => {
  const mod = id % 4;
  if (mod === 0) return 'task-badge--indigo';
  if (mod === 1) return 'task-badge--green';
  if (mod === 2) return 'task-badge--amber';
  return 'task-badge--rose';
};

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'task',
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className={`task-card ${isDragging ? 'task-card--dragging' : ''}`}
    >
      <div className="task-content">
        <span className={`task-badge ${getPriorityBadgeClass(task.id)}`}>
          {task.id % 4 === 0 ? 'Important' : task.id % 4 === 1 ? 'Done' : task.id % 4 === 2 ? 'OK' : 'Low'}
        </span>
        <h4 className="task-title">{task.title}</h4>
        <div className="task-meta">
          <span className="task-id">#{task.id}</span>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
