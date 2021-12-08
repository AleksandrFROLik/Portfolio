import React from "react";
import style from './Main.module.css'
import stylesContainer from '../stylesComponent/styles/stylesContainer.module.css'



export const Main = () => {
    return(
        <div className={style.main}>
            <div className={stylesContainer.container}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>I am Frolov Aleksander</h1>
                    <p>A Frontend developer and Fullstack</p>
                </div>
                <div className={style.photo}>

                </div>
            </div>

        </div>
    )

}