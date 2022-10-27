import { useEffect, useState } from 'react';
import './App.css';
import DoActions from './components/DoActions';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

function App() {

  const [data, setData] = useState([])

  const addTodoHandler = (text) => {
    setData([...data, text])
  }

  const deleteTodoHandler = (index) => {
    setData(data.filter((_, idx) => idx !== index))
  }

  return (
    <div className="App">
      <h1 className='t1'>Todo App</h1>
      <div>
        <ToDoForm addTodo={addTodoHandler} />
      </div>
      <div>
        <DoActions />
      </div>
      <div>
        <ToDoList props={data} deleteTodo={deleteTodoHandler} />
      </div>
    </div>
  );
}

export default App;
