import { RiTodoFill, RiDeleteBin2Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import styles from "./Todo.module.css"

function ToDo({ props, deleteT, toggle }) {

    return (
        <div className={`${styles.todo} ${props.isCompleted ? styles.completedTodo : ""}`} >
            <RiTodoFill className="todoIcon" />
            <div className="todoText">
                {props.text}

                {/* <button className="b2">Click</button>
                <button className="b2">Click</button> */}
            </div>
            <RiDeleteBin2Line className="deleteIcon" onClick={() => deleteT(props.id)} />
            <FaCheck className="checkIcon" onClick={() => toggle(props.id)} />
        </div>
    )
}
export default ToDo;
