import React, { useState } from 'react'
import { useRef } from 'react'

const Hooks3 = () => {

    const [name,setName]=useState("Ayush");
    const refElement=useRef("");
    console.log(refElement);
    function Reset(){
        setName("");
        refElement.current.focus();
    }
  return (
    <div>
      <marquee>useRef Hooks</marquee>
      <input ref={refElement} type='text' value={name} onChange={(e)=>setName(e.target.value)}></input>
      <button onClick={Reset}>Reset button</button>
    </div>
  )
}

export default Hooks3
