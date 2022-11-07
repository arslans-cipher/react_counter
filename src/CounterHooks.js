import { useState, useContext } from 'react'
import { ThemeContext } from './App'

const CounterHooks = ( {initialCount} ) => {

  console.log('Render Counter Hooks')

  const [count, setCount] = useState(initialCount)

  const style = useContext(ThemeContext)

  return <>
    <button style={style} onClick={() => { setCount( prevCount => prevCount - 1 )}}>-</button>
    <span>{count}</span>
    <button style={style} onClick={() => { setCount( prevCount => prevCount + 1 )}}>+</button>
  </>

}

export default CounterHooks