import React from 'react';
import './index.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { ITask } from '../../types';

const Deleted: React.FC = () => {
  const data: ITask[] = useSelector((state: RootState) => state.tasks.data);
  const deletedTasks: ITask[] = data.filter((task) => task.isDeleted);

  return (
    <div className="deletedContainer">
      <div className="tasksContainer">
        {deletedTasks[0] ? deletedTasks.map(task => 
          <div key={task.id} className="deletedTask">
            {task.description}
          </div>
        ): 'No deleted Todos!'}
      </div>
    </div>
  )
};

export default Deleted
