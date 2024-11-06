// components/Counter.js
"use client"
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '@/app/store/slices/counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button className='block' onClick={() => dispatch(increment())}>Increment</button>
      <button className='block'onClick={() => dispatch(decrement())}>Decrement</button>
      <button className='block'onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
    </div>
  );
}

export default Counter;
