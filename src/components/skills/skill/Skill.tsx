import React from "react";
import styles from './Skill.module.css'

type SkillType = {
    title: string
    description: string
}

export const Skill: React.FC<SkillType> = ({title, description}: SkillType) => {
    return (
        <div className={styles.skillBlock}>
            <div className={styles.icon}></div>
            <h3>{title}</h3>
            <span className={styles.description}>{description}</span>
        </div>
    )

}