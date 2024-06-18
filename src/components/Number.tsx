import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addRandomNumber } from '../store/reducers/numberReducer';

export default function Number() {
    const randomNumbers = useSelector((state:any)=>{
        state.randomNumbers
    })
    const disPatch = useDispatch();
    const handleGenerate = () =>{
        disPatch(addRandomNumber());
    }
  return (
    <div>
      <ul>{randomNumbers.map((number:number , index:number)=>{
        <li key={index}>{number}</li>
      })}</ul>
    </div>
  )
}
