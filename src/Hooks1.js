import React from 'react'
import { useState } from 'react'

const Hooks1 = () => {
    const [count,setCount]=useState(0);
    function updateCount(){
        setCount(count+1)
    }
  return (
    <div>
      <marquee>useState Hooks</marquee>
      <h2>Button Clicked {count} times!!</h2>
      <button onClick={updateCount}>Click me for useState effect</button>
    </div>
  )
}

export default Hooks1
