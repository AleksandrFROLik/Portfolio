import React from "react";
import styles from './Works.module.css'
import stylesContainer from '../stylesComponent/styles/stylesContainer.module.css'
import {Work} from "./work/Work";


export const Works = () => {
    return(
        <div className={styles.skillsBlock}>
            <div className={`${stylesContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styles.title}>works</h2>
                <div className={styles.skills}>
                    <Work/>
                    <Work/>
                </div>
            </div>

        </div>
    )

}