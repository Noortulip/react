import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

 let [counter,SetCounter] = useState(15)
 // let counter = 15

  const addvalue = () => {
    if (counter < 20)
      counter = counter+1
      SetCounter(counter)
  }
  
  const removevalue = () => {
     if (counter > 0)
      SetCounter(counter-1)
  }

  return (
    <>
      <h1>React Project</h1>
      <h2>Counter value: {counter} </h2>

      <button onClick={addvalue
      }>Add Value {counter}</button>
      <br/>
      <button onClick={removevalue
      }>Decrease Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
