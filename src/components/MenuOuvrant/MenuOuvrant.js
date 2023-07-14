import React from "react";
import styles from "./MenuOuvrant.module.scss";
import { Link } from "react-router-dom";


function MenuOuvrant ({menuStat, resetMenu}){
    function HandleClick(){
        resetMenu("none");
    }

    return (
        <div className={styles.Container} style={{display:`${menuStat}`}}>
            <h2 onClick={HandleClick}><a href="/">Accueil</a></h2>
            <h2 onClick={HandleClick}><a href="#about-me">A propos de moi</a></h2>
            <h2 onClick={HandleClick}><a href="#mon-parcours">Mon parcours</a></h2>
            <h2 onClick={HandleClick}><a href="#portfolio">Portfolio</a></h2>
            <h2 onClick={HandleClick}><a href="#skills">Mes compétences</a></h2>
            <div className={styles.IconeReseaux}>
                <p><Link target="_blank" to="https://wa.me/33752466355"><i class="fa-brands fa-whatsapp"></i></Link></p>
                <p><Link target="_blank" to="https://github.com/kmaraab"><i class="fa-brands fa-github"></i></Link></p>
                <p><Link target="_blank" to="https://www.linkedin.com/in/aboubacar-camara-6a4301196/"><i class="fa-brands fa-linkedin-in"></i></Link></p>
                <p><Link to="mailto:aboubacarcamara0110@gmail.com"><i class="fa-regular fa-envelope"></i></Link></p>
            </div>

            <div onClick={HandleClick} className={styles.IconeClose}>
                <i class="fa-solid fa-xmark"></i>
            </div>
        </div>
    )
}

export default MenuOuvrant;