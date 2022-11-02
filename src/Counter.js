import { useState } from "react"
import { setState } from 'react'

const Counter = () => {

  const [count, setCount] = useState({})
  setState(prevState => {
    return {...prevState, ...count};
  });

  return <>
    <button onClick={() => setCount(count - 1)}>-</button>
    <span>{count}</span>
    <button onClick={() => setCount(count + 1)}>+</button>
  </>
}

export default Counter