import React from 'react'
import Hook6childa from './Hook6childa'
import { createContext } from 'react'


const data=createContext();
const data1=createContext();


const Hooks6 = () => {

    const name="Ayush"
    const gender="Male"


  return (
    <div>
      <marquee>useContext Hooks</marquee>
        <data.Provider value={name}>
            <data1.Provider value={gender}>
            <Hook6childa/>
            </data1.Provider>
        </data.Provider>

     
    </div>
  )
}

export default Hooks6
export {data,data1}
