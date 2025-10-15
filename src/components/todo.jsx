import { useSelector } from "react-redux"
import AddFrom from "./AddFrom";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todoSlice";

export default function Todo() {
            const todos = useSelector((state) => state.todos);
            console.log(todos)

            const dispatch = useDispatch();

            const clickHandler = (id) => {
                console.log('delete', id)
                dispatch(deleteTodo(id))
            }
    return (
        <>
        <h2>Todo List App</h2>
        <AddFrom/>
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>{todo.task} &nbsp;
                <button onClick={ () => clickHandler(todo.id)}>X</button>
                </li>
            ))}
        </ul>
        </>
    )
}