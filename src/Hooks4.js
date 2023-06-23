import React, { useMemo } from 'react'
import { useState } from 'react'




const Hooks4 = () => {

  const [add,setAdd]=useState(0);
  const [minus,setMinus]=useState(30);

  const multiplication=useMemo(function multiply(){
    return add*10;

  },[add])

  return (
    <div>
      <marquee>useMemo Hook</marquee>
      {multiplication}<br/>
      <button onClick={()=>setAdd(add+1)}>Addition</button><span>{add}</span><br></br>
      <button onClick={()=>setMinus(minus-1)}>Substraction</button><span>{minus}</span>
    </div>
  )
}

export default Hooks4
