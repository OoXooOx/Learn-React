import ToDo from "./ToDo";


function ToDoList({ props, deleteTodo, toggle}) {


    return (
        <div className="todoList">
            {!props.length && <h2>Todo List is empty </h2>}
            {props.map((el) => 
            <ToDo key={el.id} props={el} deleteT={deleteTodo} toggle={toggle}/>)}
        </div>
    )
}
export default ToDoList;
