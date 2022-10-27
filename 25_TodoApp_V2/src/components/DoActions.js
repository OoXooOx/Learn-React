import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";
import Button from "../UI/Button";

function DoActions({ resetTodos, deleteCompletedTodos, completedTodoExist }) {

    return (
        <>
            <Button
                title={"Reset Todos"}
                onClick={resetTodos}>
                <RiRefreshLine />
            </Button>
            <Button
                title={"Clear Completed Todos"}
                onClick={deleteCompletedTodos}
                disabled={!completedTodoExist}>
                <RiDeleteBin2Line />
            </Button>
        </>
    )
}
export default DoActions;
