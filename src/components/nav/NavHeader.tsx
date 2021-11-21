import React from "react";
import style from './NavHeader.module.css'


export const NavHeader = () => {
    return(
        <div className={style.nav}>
            <a href="">Main</a>
            <a href="">Skills</a>
            <a href="">Projects</a>
            <a href="">Contact</a>
        </div>
    )

}