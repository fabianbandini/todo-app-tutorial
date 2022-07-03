import {useState} from "react";
import TodoItem from "./TodoItem";

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    const [currentInput, setCurrentInput] = useState("");

    const handleClickAdd = (e) => {
        e.preventDefault();

        if (currentInput === "") {
            //input validation
            return;
        }

        const newTodo = {
            id: currentInput + Math.random().toString(),
            content: currentInput
        }

        setTodos([newTodo, ...todos]);
        setCurrentInput("")
    }

    const handleClickRemove = (id) => {
        const filteredTodos = todos.filter(todo => todo.id !== id);
        setTodos(filteredTodos);
    }

    return (
        <div>
            <form onSubmit={(e) => handleClickAdd(e)}>
                <input onChange={(e) =>
                    setCurrentInput(e.target.value)} value={currentInput}/>
                <button type={"submit"}>add</button>
            </form>
            <div>
                {
                    todos.map(todo => {
                        return (
                            <TodoItem title={todo.content}
                                      id={todo.id}
                                      handleClickRemove={handleClickRemove}/>
                        );
                    })
                }
            </div>
        </div>
    );
}