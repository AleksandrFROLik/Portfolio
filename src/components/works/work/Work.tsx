import React from "react";
import styles from './Work.module.css'


export const Work = () => {
    return (

        <div className={styles.workBlock}>
            <div className={styles.image}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/7/78/Image.jpg' alt='logo'/>

                <div className={styles.button}>
                    <button>watch</button>
                </div>
            </div>
            <div className={styles.description}>
                <h3>Name project</h3>
                <textarea placeholder='short description'/>
            </div>
        </div>


    )

}