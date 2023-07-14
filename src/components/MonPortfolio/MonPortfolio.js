import styles from "./MonPortfolio.module.scss";
import OneProject from "../OneProject/OneProject";
import video from "../../assets/video/needforstars.mp4";
import photo from "../../assets/images/project-5.jpg";

const techno = ["React", "Node", "MongoDB"];

function MonPortfolio (){

    return (
        <div id="portfolio" className={`margeResponsive ${styles.container}`}>
            <h2>Mon portfolio</h2>
            <p className={styles.sousTitre}>Quelques-uns de mes projets les plus récents</p>
            <p className={styles.description}>Cliquez sur un projet pour en savoir plus (techno, date de création...) ou voir une démo en vidéo.</p>

            <div className={styles.AllProjects}>
                <OneProject 
                    imagePres={photo}
                    videoDemo={video}
                    nameProject= "Full Analytics"
                    pres1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    presentation="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam repellendus sapiente laboriosam perferendis fugiat dolorem inventore officia ad nam tempore? Vitae, debitis! Doloremque laudantium nihil quas sunt dolores sequi? Facere!"
                    technologies={techno}
                    dateCrea="Janvier 16, 2023"
                    url="#non en ligne"
                />
                <OneProject 
                    imagePres={photo}
                    videoDemo={video}
                    nameProject= "Full Analytics"
                    pres1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    presentation="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam repellendus sapiente laboriosam perferendis fugiat dolorem inventore officia ad nam tempore? Vitae, debitis! Doloremque laudantium nihil quas sunt dolores sequi? Facere!"
                    technologies={techno}
                    dateCrea="Janvier 16, 2023"
                    url="#non en ligne"
                />
                <OneProject 
                    imagePres={photo}
                    videoDemo={video}
                    nameProject= "Full Analytics"
                    pres1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    presentation="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam repellendus sapiente laboriosam perferendis fugiat dolorem inventore officia ad nam tempore? Vitae, debitis! Doloremque laudantium nihil quas sunt dolores sequi? Facere!"
                    technologies={techno}
                    dateCrea="Janvier 16, 2023"
                    url="#non en ligne"
                />
                <OneProject 
                    imagePres={photo}
                    videoDemo={video}
                    nameProject= "Full Analytics"
                    pres1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    presentation="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam repellendus sapiente laboriosam perferendis fugiat dolorem inventore officia ad nam tempore? Vitae, debitis! Doloremque laudantium nihil quas sunt dolores sequi? Facere!"
                    technologies={techno}
                    dateCrea="Janvier 16, 2023"
                    url="#non en ligne"
                />
                <OneProject 
                    imagePres={photo}
                    videoDemo={video}
                    nameProject= "Full Analytics"
                    pres1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    presentation="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam repellendus sapiente laboriosam perferendis fugiat dolorem inventore officia ad nam tempore? Vitae, debitis! Doloremque laudantium nihil quas sunt dolores sequi? Facere!"
                    technologies={techno}
                    dateCrea="Janvier 16, 2023"
                    url="#non en ligne"
                />
                <OneProject 
                    imagePres={photo}
                    videoDemo={video}
                    nameProject= "Full Analytics"
                    pres1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    presentation="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam repellendus sapiente laboriosam perferendis fugiat dolorem inventore officia ad nam tempore? Vitae, debitis! Doloremque laudantium nihil quas sunt dolores sequi? Facere!"
                    technologies={techno}
                    dateCrea="Janvier 16, 2023"
                    url="#non en ligne"
                />
            </div>
            
        </div>
    )
}


export default MonPortfolio;