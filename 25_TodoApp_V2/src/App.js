import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import DoActions from './components/DoActions';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

function App() {

  const [data, setData] = useState([])

  const addTodoHandler = (text) => {

    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4()
    }
    if (!!text) {
      setData([...data, newTodo])
    }
  }

  const deleteTodoHandler = (id) => {
    setData(data.filter((todo) => todo.id !== id))
  }

  const toggleTodoHandler = (id) => {
    setData(data.map(el => {
      return el.id === id
        ? { ...el, isCompleted: !el.isCompleted }
        : { ...el }
    }))
  }

  const resetTodosHandler = () => {
    setData([])
  }

  const deleteCompletedTodosHandler = () => {
    setData(data.filter((el) => !el.isCompleted))
  }

  const completedTodosCount = data.filter((el) => el.isCompleted).length

  return (
    <div className="App">
      <h1 className='t1'>Todo App</h1>
      <div>
        <ToDoForm addTodo={addTodoHandler} />
      </div>
      {!!data.length &&
        <DoActions
          completedTodoExist={!!completedTodosCount}
          resetTodos={resetTodosHandler}
          deleteCompletedTodos={deleteCompletedTodosHandler} />}
      <div>
        <ToDoList
          props={data}
          deleteTodo={deleteTodoHandler}
          toggle={toggleTodoHandler} />
      </div>
      {!!completedTodosCount &&
        <h2>
          {`You have completed ${completedTodosCount} ${completedTodosCount > 1
            ? "todos"
            : "todo"}`}
        </h2>}
    </div>
  );
}

export default App;
