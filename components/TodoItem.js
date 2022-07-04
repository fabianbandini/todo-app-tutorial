import {useState} from "react";
import Image from "next/image";
import styles from "./todoitem.module.scss";

export default function TodoItem({title, id, handleClickRemove}) {
    const [done, setIsDone] = useState(false);

    const markDone = () => {
        setIsDone(!done);
    }

    return (
        <div onClick={markDone} className={styles.container}>
            <h2>{title}</h2>
            <button onClick={() => handleClickRemove(id)}><Image src={"/trashicon.svg"} width={20} height={20}/>
            </button>
        </div>
    );
}