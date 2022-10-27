import {useState} from "react"
import './App.css';
import Button from './Components/Button';
import Counter from './Components/Counter';
function App() {

  const [count, setCount] = useState(0);
  
  const inc = ()=>{
    setCount(count+1)
  }
 
  return (
    <div className="App">
      <Counter count={count}/>
      <Button  onClick={inc}/>
      <Button  onClick={inc}/>
      <Button  onClick={inc}/>
      <Button  onClick={inc}/>
    </div>
  );
}

export default App;
