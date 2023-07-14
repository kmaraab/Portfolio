import styles from "./OneProject.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

function OneProject ({imagePres, pres1, nameProject, videoDemo, presentation, technologies, dateCrea, url}){

    console.log(technologies);

    const [showDetails, setShowDetails] = useState("none");

    return (
        <>
            <div className={styles.containerView} onClick={()=>{setShowDetails("flex")}}>
                <div className={styles.hoverView} onClick={()=>{setShowDetails("flex")}}
                    style={{
                        backgroundImage: `url(${imagePres})`
                    }}
                >
                    <div>
                        <p>{pres1}</p>

                        <p className={styles.showDetails}>En savoir plus</p>
                    </div>
                </div>
            </div>

            <div className={styles.oneProject} 
                style={{
                    display: `${showDetails}`
                }}
            >
                <div className={styles.detailsProject}>
                    <div onClick={()=>{setShowDetails("none")}} className={styles.iconeClose}><i class="fa-solid fa-xmark"></i></div>

                    <h3 className={styles.title}>{nameProject}</h3>

                    <div className={styles.demoEpresentation}>
                        <video controls src={videoDemo}></video>
                        <div>
                            <h3>Présentation:</h3>
                            <p>{presentation}</p>
                        </div>
                    </div>

                    <div>
                        <h3>Technologies:</h3>
                        <div className={styles.allTechno}>
                            {technologies.map( (techno) =>
                                <p className={styles.oneTechno}>{techno}
                                </p>
                            )}
                        </div>
                        <h3>Date: <div>{dateCrea}</div></h3>
                        <h3 className={styles.urlProject}>URL: <p> <Link to={`${url}`}>{url}</Link></p></h3>
                    </div>
                </div>
            </div>
            
        </>
    )
}


export default OneProject;