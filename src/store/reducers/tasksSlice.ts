import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITask } from '../../types';

interface TasksState {
  data: ITask[]
};

const initialState: TasksState = {
  //@ts-ignore
  data: JSON.parse(localStorage.getItem('tasks')) || [] 
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    createTask: (state, action: PayloadAction<string>) => {
      const id = Math.random().toString(36).substr(2);
      const newTask: ITask = { description: action.payload, id };
      const tasks = [...state.data, newTask];

      localStorage.setItem('tasks', JSON.stringify(tasks));
      
      state.data = tasks
    },
    deleteTask: (state, action: PayloadAction<ITask>) => {
      const deletedTask = {...action.payload, isDeleted: true};
      const tasks = [...state.data.filter(task => task.id !== action.payload.id),  deletedTask ];

      localStorage.setItem('tasks', JSON.stringify(tasks));

      state.data = tasks
    }
  }
});

export const { createTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer
