// store/store.js
import { configureStore as test } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import abhishek from '@/app/store/slices/testSlice'

export const store = test({
  reducer: {
    counter: counterReducer,
    test: abhishek
  },
});
