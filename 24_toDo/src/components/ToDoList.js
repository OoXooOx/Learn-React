import ToDo from "./ToDo";


function ToDoList({ props, deleteTodo}) {


    return (
        <div className="todoList">
            {!props.length && <h2>Todo List is empty </h2>}
            {props.map((el, index) => 
            <ToDo key={index} props={el} index={index} deleteT={deleteTodo}/>)}
        </div>
    )
}
export default ToDoList;
