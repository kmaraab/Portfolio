import styles from "./Accueil.module.scss";
import Profil from "../assets/images/profil.jpg"
import APropos from "../components/APropos/APropos";
import MonParcours from "../components/MonParcours/MonParcours"
import MesCompetences from "../components/MesCompetences/MesCompetences";
import MonPortfolio from "../components/MonPortfolio/MonPortfolio";

function Accueil (){ 

    return (
        <>
            <div className={`margeResponsive ${styles.container}`}>
                <div className={styles.presentation}>
                    <div className={styles.imgProfil}><img src={Profil} alt="Phot de profil"/></div>
                    <div>
                        <div className={styles.infoDBase}>
                            <p>Hello, je suis developpeur</p>
                            <p className={styles.typewriter}></p>
                            <p>résident sur Bordeaux, France</p>
                        </div>

                        <div className={styles.buttonCTA}>
                            <a href="#portfolio"><div className={styles.portfolio}>Voir mon portfolio</div></a>
                            <a href="#skills"><div className={styles.skills}>Mes compétences <i class="fa-regular fa-circle-down"></i></div></a>
                        </div>
                    </div>
                </div>

                <div className={styles.arrowAnnimation}>
                    <i class="fa-solid fa-arrow-down"></i>
                </div>
            </div>

            <APropos/>
            <MonParcours/>
            <MesCompetences/>
            <MonPortfolio/>
        </>
    )
}


export default Accueil;