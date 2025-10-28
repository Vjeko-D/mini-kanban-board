import React from 'react';
import { useDrag } from 'react-dnd';
import { TaskWithStatus } from '../types';

interface TaskCardProps {
  task: TaskWithStatus;
}

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
        <h4 className="task-title">{task.title}</h4>
        <div className="task-meta">
          <span className="task-id">#{task.id}</span>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
