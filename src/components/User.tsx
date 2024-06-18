import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function User() {
    const stateUser : any = useSelector(state => {
        return state;
    })
    const disPatch = useDispatch();
    const addUser = () =>{
      let newUser = {
        id: 2,
        name : "Anh",
        sex : "Male",
        date : "20/03/2003",
        address : "Hà Nội",
      }
      disPatch({
        type:"ADD",
        payload:newUser,
      })
    }
  return (
    <div>
      Câu 1
      {stateUser.reducerUser.map((user:any)=>{
        return <>
          <li>{user.id}</li>
          <li>{user.name}</li>
          <li>{user.sex}</li>
          <li>{user.date}</li>
          <li>{user.address}</li>
        </>
      })}
      <button onClick={addUser}>ADD</button>
    </div>
  )
}
