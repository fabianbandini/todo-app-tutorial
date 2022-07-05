import {useEffect, useState} from "react";
import Image from "next/image";
import styles from "./todoitem.module.scss";

export default function TodoItem({title, id, handleClickRemove}) {
    const [done, setIsDone] = useState(false);

    const markDone = () => {
        console.log("kljfds");
        setIsDone(!done);
        console.log(done);
    }

    return (
        <div onClick={markDone} className={done? styles.doneContainer : styles.container}>
            <h2>{title}</h2>
            <button onClick={() => handleClickRemove(id)}><Image src={"/trashicon.svg"} width={20} height={20}/>
            </button>
        </div>
    );
}