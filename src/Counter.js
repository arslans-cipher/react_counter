import { useState } from "react"

const Counter = ( {initialCount} ) => {

  const [count, setCount] = useState(0)
  
  return <>
    <button>-</button>
    <span>{count}</span>
    <button>+</button>
  </>
}

export default Counter