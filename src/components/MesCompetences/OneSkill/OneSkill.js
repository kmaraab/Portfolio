import styles from "./OneSkill.module.scss";

function Skills ({title, percent}){

    return (
        <div className={styles.skill}>
            <div className={styles.oneSkill}>
                <p>{title}</p>
                <p>{percent}%</p>
            </div>
            <div className={styles.graphSkill}>
                <p></p>
                <p style={{width: `${percent}%` }}></p>
            </div>
        </div>
    )
}


export default Skills;