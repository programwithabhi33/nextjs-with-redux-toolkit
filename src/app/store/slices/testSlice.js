// store/slices/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const testSlice = createSlice({
  name: 'test',
  initialState:{value: 0, name: "abhishek"},
  reducers: {
    incrementTest: (state, action) => { state.value = state.value + action.payload },
    decrementTest: (state, action) => {  
        if(state.value != 0){
            state.value = state.value -  action.payload 
        }   
    },
    changeTestName: (state, action) => { state.name = action.payload },
  },
});

export const { incrementTest, decrementTest, changeTestName } = testSlice.actions;
export default testSlice.reducer;