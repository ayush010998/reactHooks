import React from 'react'
import { data,data1 } from './Hooks6'
import { useContext } from 'react'



const Hook6childc = () => {

  const name=useContext(data);
  const gender=useContext(data1);
  return (
    <div>
      <h1>Hello my name is {name}</h1>
      <h1> my gender is {gender}</h1>
      
    </div>
  )
}

export default Hook6childc
