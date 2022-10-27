import { useState } from "react";

function ToDoForm({ e, addTodo }) {
    const [text, setText] = useState("")

    function handleFormSubmit(e) {
        e.preventDefault();
        addTodo(text)
        setText("")
    }

    function handleInputChange(e) {
        setText(e.target.value)
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <input
                    className="input1"
                    type="text"
                    value={text}
                    placeholder="Enter your Todo"
                    onChange={handleInputChange} />
                <button
                    className="b1"
                    type="submit"
                    title="Submit" >
                    SUBMIT
                </button>
            </form>
        </>
    )
}
export default ToDoForm;
