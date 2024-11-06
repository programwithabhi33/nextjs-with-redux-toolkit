"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeTestName, decrementTest, incrementTest } from '../store/slices/testSlice'

const page = () => {
    const value = useSelector(state => state.test.value)
    const name = useSelector(state => state.test.name)
    const dispatch = useDispatch();

    const increment = ()=> {
        dispatch(incrementTest(5))
    }
    const decrement = ()=>{
        dispatch(decrementTest(5))
    }
    const changeName = (name)=>{
        dispatch(changeTestName(name))
    }
    console.log(name)

    return (
        <div>
            Test page
            Test Value is {value}
            <br></br>
            Test Name is {name}
            <button className='block' onClick={increment}>Increment</button>
            <button className="block" onClick={decrement}>Decrement</button>
            <button className="block" onClick={_ => changeName("sourabh")}>Change Name to Sourabh</button>
            <button className="block" onClick={_ => changeName("abhishek")}>Change Name to Abhishek</button>
        </div>
    )
}

export default page
