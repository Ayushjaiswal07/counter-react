import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count, setCount] = useState(5);
  let [message, setMessage] = useState("Under Limit");

  const addCount = function() {
    if (count<20)
      {
        count = count+1;
        setCount(count);
        console.log("count:", count);

        if( count === 20)
          {
            message="Limit exceed";
            setMessage(message);
          }
          else{
            message="Under Limit";
            setMessage(message);
          }
        
      }
      else{
        message="Limit exceed";
        setMessage(message);
      }
    
    
  }

  const removeCount = function() {
    if (count>0)
      {
        count = count-1;
        setCount(count);
        console.log("count:", count);

        if( count === 0)
          {
            message="Limit exceed";
            setMessage(message);
          }
          else{
            message="Under Limit";
            setMessage(message);
          }
      }
      else{
        message="Limit exceed";
        setMessage(message);
      }
  }

  return (
    <>
      <h1>Hey Ayush</h1>
      <h2>value of count {count}</h2>
      <button onClick={addCount}>Add Value</button>
      <button onClick={removeCount}>Remove Value</button>
      <p>LIMIT : {message}</p>
    </>
  )
}

export default App
