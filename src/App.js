import React, { useState } from 'react'
import Counter from "./Counter"
import CounterHooks from "./CounterHooks"

export const ThemeContext = React.createContext()

const App = () => {

  const [theme, setTheme] = useState('green')

  return <ThemeContext.Provider value={ {backgroundColor: theme }}>
    Counter
    <Counter initialCount={0}/>
    <br/>
    <br/>
    <br/>
    Counter Hooks
    <CounterHooks initialCount={0}/>
    <br/>
    <br/>
    <br/>
    <button onClick={() => setTheme(prevTheme => {
      return prevTheme === 'red' ? 'blue' : 'red'})}>
        Toggle Theme
      </button>
    </ThemeContext.Provider>
}

export default App