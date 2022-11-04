import Counter from "./Counter"
import CounterHooks from "./CounterHooks"

const App = () => {
  return <> 
    Counter
    <Counter initialCount={0}/>
    <br/>
    <br/>
    <br/>
    Counter Hooks
    <CounterHooks initialCount={0}/>
    </>
}
export default App