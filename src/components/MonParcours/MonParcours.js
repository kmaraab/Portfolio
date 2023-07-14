import { Link } from "react-router-dom";
import styles from "./MonParcours.module.scss";

function MonParcours (){

    return (
        <div id="mon-parcours" className={`margeResponsive ${styles.container}`}>
            <h2>Mon Parcours</h2>
            <p className={styles.title2}>Un resumé sur mon parcours</p>

            <div className={styles.allParcours}>
                <div className={styles.monParcours}>
                    <h3>Mes formations</h3>
                    <div>
                        <h3>Bachelor en dévéloppement web</h3>
                        <p>Digital Campus / 2022 - 2023</p>
                    </div>
                    <div>
                        <h3>Diplômé développeur web</h3>
                        <p>OpenClassrooms / 2021 - 2022</p>
                    </div>
                    <div>
                        <h3>Lience informatique</h3>
                        <p>Université de Bordeaux / 2020 - 2021</p>
                    </div>
                    <div>
                        <h3>Lience 1 Année prépa</h3>
                        <p>EMSI Rabat / 2018 - 2019</p>
                    </div>
                    <div>
                        <h3>Lience MIAGE</h3>
                        <p>UGANC (Guinée) / 2017 - 2018</p>
                    </div>
                </div>
                
                <div className={styles.monParcours}>
                    <h3>Mes Expériences</h3>
                    <div>
                        <h3>Alternant dévéloppeur web</h3>
                        <p><Link target="_blank" to="https://agence-marketing-bordeaux.com/">Agence Marketing Bordeaux</Link> / 2022 - 2023</p>
                    </div>
                    <div>
                        <h3>Alternant développeur/Formateur web</h3>
                        <p><Link target="_blank" to="https://lhcommunication.com/">LH Communication</Link> / 2021 - 2022</p>
                    </div>
                    <div>
                        <h3>Développeur web</h3>
                        <p>Freelance / 2019 - Maintenant</p>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default MonParcours;