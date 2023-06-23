import React, { useState } from 'react'
import Hook5child from './Hook5child';
import { useCallback } from 'react';

const Hook5 = () => {

   const [add,setAdd]=useState(0);
   const Learning =useCallback(()=>{

   },[])


  return (
    <div>
      <marquee>useCallback Hooks</marquee>
      <h1>{add}</h1>
      <Hook5child Learning={Learning}/>
      <button onClick={()=>setAdd(add+1)}>Addition</button>
    </div>
  )
}

export default Hook5
