import React from 'react'
import { useState,useEffect } from 'react'

const Hooks2 = () => {
    const [count,setCount]=useState(0)
    const [data,setData]=useState("ayush");
    function updateData(){
        setData("aaaaa")
    }


    useEffect(()=>{
        console.log("component mounted")
    },[data]);
    function updateCount(){
        setCount(count+1)
    }
  return (
    <div>
      <marquee>useEffect Hooks</marquee>
      <h2>Button Clicked {count} times!!</h2>
      <button onClick={updateCount}>Click me for useState effect</button>
      <button onClick={updateData}>Click me for useEffect hooks update in console</button>
    </div>
  )
}

export default Hooks2
