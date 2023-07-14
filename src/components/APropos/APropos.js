import styles from "./APropos.module.scss";

function APropos (){

    return ( 
        <div id="about-me" className={`margeResponsive ${styles.container}`}>
            <h2>A propos de moi</h2>
            <p className={styles.enSVRplus}>En savoir plus</p>

            <div>
                <div className={styles.firstInfo}>
                    <div>
                        <p className={styles.nomAuteur}>Je m'appelle <span>Camara Aboubacar</span></p>
                        <p className={styles.presentation}>J’ai eu l’occasion de travailler sur divers projets, allant de la création de sites web élégants à la mise en place de fonctionnalités avancées sur des SAS par exemples. Je suis quelqu’un de curieux, motivé et toujours prêt à relever de nouveaux défis. Je suis convaincu que le web est un domaine en constante évolution et j’aspire à contribuer à son développement.</p>
                    </div>
                    
                    <div className={styles.experiences}>
                        <p>2</p>
                        <p>Ans d'<span>Expériences</span></p>
                    </div>
                </div>

                <div className={styles.infoEcoordonnes}>
                    <div>
                        <p>Nom:</p>
                        <p>Camara Aboubacar</p>
                    </div>
                    
                    <div>
                        <p>Date de naissance:</p>
                        <p>10, Janvier 2000</p>
                    </div>

                    <div>
                        <p>Email:</p>
                        <p>ab@choosews.com</p>
                    </div>

                    <div>
                        <p>Localisation:</p>
                        <p>Bordeaux, France</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default APropos;