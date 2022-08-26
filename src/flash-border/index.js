import React, {useState, useEffect} from "react";
import styles from './index.module.css';

export const FlashBorder = ({children, add}) => {
    // const [addBorder, setAddBorder] = useState(add);
    const [flash, setFlash] = useState(false);

    useEffect(() => {
        if(add) {
            setInterval(() => {
                setFlash(prev => !prev);
            }, 1000);
        }
       
    }, []);

    return (
        <div className={flash ? styles.border : ''}>
            {children}
        </div>
    )
}