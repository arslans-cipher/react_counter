import { useState } from 'react'

const CounterHooks = ( {initialCount} ) => {

  const [state, setState] = useState( { count: initialCount})

  return <>
    <button>-</button>
    <span>{initialCount}</span>
    <button>+</button>
  </>

}

export default CounterHooks