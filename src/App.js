import React from 'react'
import Counter from "./Counter"
import CounterHooks from "./CounterHooks"

export const ThemeContext = React.createContext()

const App = () => {
  return <ThemeContext.Provider >
    Counter
    <Counter initialCount={0}/>
    <br/>
    <br/>
    <br/>
    Counter Hooks
    <CounterHooks initialCount={0}/>
    </ThemeContext.Provider>
}

export default App