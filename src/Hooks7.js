import React, { useReducer } from 'react'


const initialState=0;
const reducer=(state,action)=>{
  switch(action){
    case "Increment":
      return state+1
    case "Decrement":
      return state-1
    default:
      return state    
  }

}

const Hooks7 = () => {
  const [count,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
      <marquee>useReducer Hooks</marquee>
      <div>count={count}</div>
      <button onClick={()=>dispatch("Increment")}>Increment</button>
      <button onClick={()=>dispatch("Decrement")}>Decrement</button>

    </div>
  )
}

export default Hooks7
