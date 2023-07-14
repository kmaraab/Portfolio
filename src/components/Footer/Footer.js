import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";

function Footer (){

    return (
        <>
            <div className={`margeResponsive ${styles.container}`}>
                <h2>Au plaisir de vous rencontrer</h2>
                <div className={styles.footer}>
                    <p>
                        J'aime discuter de nouveaux projets et de défis en matière de développement web, nhésitez pas à me contacter.
                    </p>

                    <div className={styles.coordonnes}>
                        <h3>Mon adresse</h3>
                        <p>3 rue san martin de valdeiglesias, 33560 Carbon-Blanc, France</p>

                        <h3>Mon téléphone</h3>
                        <p><Link to="tel:+33745649205">(033) 745 649 205</Link></p>

                    </div>
                </div>
                <div className={styles.IconeReseaux}>
                    <p><Link target="_blank" to="https://wa.me/33752466355"><i class="fa-brands fa-whatsapp"></i></Link></p>
                    <p><Link target="_blank" to="https://github.com/kmaraab"><i class="fa-brands fa-github"></i></Link></p>
                    <p><Link target="_blank" to="https://www.linkedin.com/in/aboubacar-camara-6a4301196/"><i class="fa-brands fa-linkedin-in"></i></Link></p>
                    <p><Link to="mailto:aboubacarcamara0110@gmail.com"><i class="fa-regular fa-envelope"></i></Link></p>
                </div>
            </div>

            <div className={styles.bottomFooter}>
                Copyright © 2023 Camara. Tous droits réservés.
            </div>
        </>
    )
}


export default Footer;