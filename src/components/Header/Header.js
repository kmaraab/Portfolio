import styles from "./Header.module.scss";
import MenuOuvrant from "../MenuOuvrant/MenuOuvrant";
import React, { useState } from "react";

function Header (){
    const [menuVisibility, setMenuVisibility] = useState("none");
    const [backgroundMenu, setBackgroundMenu] = useState("")
    
    function showMenu (){
        setMenuVisibility("flex");
    }
    
    function resetMenu (value){
        setMenuVisibility(value);
    }

    window.addEventListener("scroll", ()=>{
        if(window.scrollY > 30){
            setBackgroundMenu("headerBackground");
            console.log(backgroundMenu);
        }
        else{
            setBackgroundMenu("");
        }
    })

    return (
        <>
            <div className={`margeResponsive ${styles.Container} ${backgroundMenu}`}>
                <h2 className={styles.Logo}>CAMARA</h2>
                <div className={styles.LinkMenu}>
                    <p><i class="fa-solid fa-phone-flip"></i></p>
                    <p><a href="tel:+33745649205">(033) 745 649 205</a></p>
                    <div onClick={showMenu} className={styles.MenuBurgerIcone}>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                </div>
            </div>
            <MenuOuvrant resetMenu={resetMenu} menuStat={menuVisibility} />
        </>
    )
}


export default Header;