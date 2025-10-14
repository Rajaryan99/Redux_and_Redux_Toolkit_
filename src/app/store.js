import { configureStore } from '@reduxjs/toolkit';
import todoReducre from '../features/todoSlice'

 export const store= configureStore({
    reducer: todoReducre,
 });