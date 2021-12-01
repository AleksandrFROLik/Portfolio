import React from "react";
import styles from './Footer.module.css'
import stylesContainer from "../stylesComponent/styles/stylesContainer.module.css";


export const Footer = () => {
    return (
        <div className={styles.footerBlock}>
            <div className={`${stylesContainer.container} ${styles.footerContainer}`}>
                <div><h2 className={styles.title}>Frolov Aleksandr</h2></div>
                <div className={styles.socialBlock}>
                    <div className={styles.first}>1</div>
                    <div  className={styles.second}>2</div>
                    <div  className={styles.thirty}>3</div>
                    <div  className={styles.forty}>4</div>
                </div>
                <div className={styles.button}>2021 All rights reserved</div>
            </div>

        </div>
    )

}