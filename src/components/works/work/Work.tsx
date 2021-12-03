import React from "react";
import styles from './Work.module.css'


export const Work = () => {
    return (

        <div className={styles.workBlock}>
            <div className={styles.image}>
                <span>Picture</span>
                <div className={styles.button}>
                    <a href="/">Click</a>
                </div>
            </div>
            <div className={styles.description}>
                <h3>Name project</h3>
                <textarea placeholder='short description'/>
            </div>
        </div>


    )

}