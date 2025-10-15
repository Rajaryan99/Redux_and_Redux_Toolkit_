import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";

export default function AddFrom() {
    const [task, settask] = useState('');
    const dispatch  = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(task)
        dispatch(addTodo(task))
        s
    }

    return(

        <>
            <form onSubmit={submitHandler}>
                <input type="text" onChange={(e) =>  settask(e.target.value)} />
                <br />
                <button>Add Task</button>
            </form>
        </>
    )
}