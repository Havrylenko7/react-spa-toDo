import React, { useState } from 'react';
import './index.scss';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { createTask, deleteTask } from '../../store/reducers/tasksSlice';
import { TrashFill } from 'react-bootstrap-icons';
import { ITask } from '../../types';

const All: React.FC = () => {
  const [newTask, setNewTask] = useState<string>('');

  const data: ITask[] = useSelector((state: RootState) => state.tasks.data);
  const dispatch = useDispatch<AppDispatch>();

  const sortedTasks = [...data].sort((a, b) => {
    if (a.isDeleted) return 1;
    return -1
  });

  const addNewTask = () => {
    if (newTask.length >= 2) {
      dispatch(createTask(newTask)); 
      setNewTask('')
    }
  };

  return (
    <div className="allContainer">
      <div className="inputContainer">
        <input 
          type="text"
          placeholder="Describe your new task"
          onChange={e => setNewTask(e.target.value)}
          value={newTask}
        />
        <button onClick={addNewTask}>
          Add
        </button>
      </div>
      <div className="tasksContainer">
        {sortedTasks[0] ? sortedTasks.map(task => 
          <div key={task.id} className={task.isDeleted ? 'deletedTask' : 'task'}>
            {task.description}
            {!task.isDeleted && 
              <TrashFill onClick={() => dispatch(deleteTask(task))} /> 
            }
          </div>
        ) : 'Add new Task!'}
      </div>
    </div>
  )
};

export default All
