import TodoList from "../components/TodoList";
import styles from "./index.module.scss";

export default function IndexPage(){
    return (
        <div className={styles.container}>
            <h1>Todo List</h1>
            <TodoList />
        </div>
    );
}