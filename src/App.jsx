import './App.css';
import Count from './Components/Count';
import CountDown from './Components/CountdownComponent';
import { useState } from 'react';
 
function App() {
 
  const [count, setCount] = useState(0);
  const [countDown, setCountDown] = useState(10);
 
  return (
    <>
      <Count count={count} setCount={setCount} />
      <Count count={count} setCount={setCount} />
      <Count count={count} setCount={setCount} />
 
 
      <CountDown countdown={countDown} setCountDown={setCountDown} />
 
    </>
  );
}
 
export default App;