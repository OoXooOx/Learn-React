import { useState } from "react"
import './App.css';
import Button from './Components/Button';
import Counter from './Components/Counter';
import ResetButton from "./Components/ResetButton";

function App() {

  const [count, setCount] = useState(0);

  const inc = () => {
    setCount(count + 1)
  }

  const zero = () => {
    setCount(0)
  }



  return (
    <div className="App">
      <Counter count={count} />
      <Button onClick={inc} />
      <Button onClick={inc} />
      <Button onClick={inc} />
      <Button onClick={inc} />
      {count > 0 && (
        <ResetButton onClick={zero}/>
      )}
    </div>
  );
}

export default App;
