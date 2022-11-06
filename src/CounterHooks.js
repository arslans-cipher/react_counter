import { useState } from 'react'

const CounterHooks = ( {initialCount} ) => {

  const [state, setState] = useState( { count: initialCount } )

  return <>
    <button onClick={() => setState( prevState => { 
        return { count: prevState.count - 1 }
      })}>-</button>
    <span>{state.count}</span>
    <button onClick={() => setState( prevState => { 
      return { count: prevState.count + 1}
      })}>+</button>
  </>

}

export default CounterHooks