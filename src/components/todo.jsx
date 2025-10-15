import { useSelector } from "react-redux"
import AddFrom from "./AddFrom";

export default function Todo() {
            const todos = useSelector((state) => state.todos);
            console.log(todos)
    return (
        <>
        <h2>Todo List App</h2>
        <AddFrom/>
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>{todo.task}</li>
            ))}
        </ul>
        </>
    )
}