import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)

  //let counter = 15;

  const addValue = () =>{

     //console.log("clicked ",counter)
     //counter = counter + 1;

     if (counter < 10) {
      setCounter(counter+1)

     }
  }

  const removeValue = () =>{
     //console.log("clicked ",counter)
     //counter = counter - 1;
      
     if (counter > 0) {
      setCounter(counter-1)
     }
  }
  
  return (
    <>
    <h1>REACT</h1>
    <h2>counter value: {counter}</h2>

    <button onClick={addValue}>Add value {counter}</button>
    <br/>
    <button onClick={removeValue}>Remove value {counter}</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App
