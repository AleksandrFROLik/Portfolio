import React from "react";
import style from './MainHeader.module.css'
import {NavHeader} from "../nav/NavHeader";


export const MainHeader = () => {
    return(
        <div className={style.header}>
            <NavHeader/>
        </div>
    )

}