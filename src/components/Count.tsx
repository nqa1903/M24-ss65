import React from 'react'
import { UseSelector, useDispatch, useSelector } from 'react-redux'
import { actionCount } from '../actions';
export default function Count() {
    const stateCount:any = useSelector(state =>{
        return state;
    })
    const dispatch = useDispatch();
    const increase = ()=>{
        dispatch(actionCount("INCREASE" , 5))
    }
    const decrease = ()=>{
        dispatch({
            type:"DECREASE",
        })
    }
  return (
    <div>
      Count
      <p>Giá trị count : {stateCount.reducerCount}</p>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
}
