import { useState } from 'react'

import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

  const addvalue = ()=>{
    if(counter < 20){
    setCounter(counter + 5 )
    }
  }
  const removevalue = ()=>{
    if(counter > 0){
      setCounter(counter - 5)
      }
  }
  
  return(
    <>
    <h1>chai or code</h1>
    <h2>counter value: {counter}</h2>
    <button onClick={addvalue}>Add Value {counter}</button>
    <button onClick={removevalue}>Remove Value {counter}</button>

    </>
  )
}

export default App
