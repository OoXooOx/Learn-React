import { RiTodoFill } from "react-icons/ri"

function ToDo({ props, index, deleteT }) {

    return (

        <div className="todo" onDoubleClick={() => deleteT(index)}>
            <RiTodoFill className="todoIcon" />
            <div className="todoText">
                {props}
                {/* <button className="b2">Click</button>
                <button className="b2">Click</button> */}
            </div>
        </div>
    )
}
export default ToDo;
