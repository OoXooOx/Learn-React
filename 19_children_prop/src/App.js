import './App.css';
import Wrapper from './Components/Wrapper';

function App() {
  return (
    <div className="App">
      <Wrapper color="lightblue">
        <h2>Text inside Wrapper</h2>
        <button>Click me</button>
      </Wrapper>
      <Wrapper color="lightgreen">
        <h2>Fuck you</h2>
        <button>Press me</button>
        <p>Some</p>
        <input type="text" placeholder="Enter value" />
      </Wrapper>

    </div>
  );
}

export default App;
