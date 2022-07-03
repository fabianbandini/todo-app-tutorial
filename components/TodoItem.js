import {useState} from "react";

export default function TodoItem({title, id, handleClickRemove}){
    const [done, setIsDone] = useState(false);

    const markDone = () => {
        setIsDone(!done);
    }

    return (
        <div onClick={markDone}>
            <h2>{title}</h2>
            <button onClick={() => handleClickRemove(id)}></button>
        </div>
    );
}