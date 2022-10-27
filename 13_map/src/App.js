import {useState} from "react"
import './App.css';
import Button from './Components/Button';
import Counter from './Components/Counter';

const texts = [
  "Click me", 
  "Click me pls",
  "Hit me",
  "Press me",
  "Click me again",
  "Press me!!!"
]

function App() {

  const [count, setCount] = useState(0);
  
  const inc = ()=>{
    setCount(count+1)
  }
 
  return (
    <div className="App">
      <Counter count={count}/>
      {texts.map((el)=>{
        return (
          <Button onClick={inc} text={el} key={index}/>
        )
      })}
    </div>
  );
}

export default App;
