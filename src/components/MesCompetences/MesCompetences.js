import styles from "./MesCompetences.module.scss";
import CV from "../../assets/doc/CV-CAMARA Aboubacar.pdf";
import OneSkill from "./OneSkill/OneSkill";

function MesCompetences (){

    return (
        <div id="skills" className={styles.container}>
            <h2>Mes compétences</h2>
            <div className={styles.allSkills}>
                <OneSkill title="ReactJs / React Native" percent="80"/>
                <OneSkill title="NodeJs / Express" percent="80"/>
                <OneSkill title="MongoDB(noSQL)" percent="70"/>
                <OneSkill title="Puppeteer" percent="80"/>
                <OneSkill title="WordPress & Shopify" percent="80"/>
                <OneSkill title="Postman" percent="90"/>
            </div>

            <div className={styles.CVcontainer}>
                <a href={CV} download><div className={styles.downloadCV}>Télécharger mon CV</div></a>
            </div>
        </div>
    )
}


export default MesCompetences;