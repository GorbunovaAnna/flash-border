import React, {useState} from "react";
import styles from './page.module.css';
import { useCount } from "./useCount";

export const PageOne = () => {
    const {count, plus, minus} = useCount();

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Counter: {count}</h1>
            <button className={styles.button} onClick={plus} >+</button>
            <button className={styles.button} onClick={minus}>-</button>
        </div>
    )
}