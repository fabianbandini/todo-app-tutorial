import {useEffect, useState} from "react";
import TodoItem from "./TodoItem";
import {Cookies} from "next/dist/server/web/spec-extension/cookies";
import {getCookies} from "cookies-next";

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    const [currentInput, setCurrentInput] = useState("");
    const cookies = new Cookies();

    useEffect(() => {
        let _todos = cookies.get("todos");
        if (_todos !== undefined){
            setTodos(JSON.parse(_todos));
            return;
        }

        setTodos([]);
    }, [])

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
        cookies.set("todos", JSON.stringify(todos), {path: '/'});
    }

    const handleClickRemove = (id) => {
        const filteredTodos = todos.filter(todo => todo.id !== id);
        setTodos(filteredTodos);
        cookies.set("todos", JSON.stringify(todos));
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