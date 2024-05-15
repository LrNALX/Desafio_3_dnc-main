import styles from './Navbar.module.css'
import { useState } from 'react'
import Tech from '../elements/Tech'
import { FaGithub } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa6';




function Navbar() {
    const [showTechnologies, setShowTechnologies] = useState(false);

    const handleToggleTechnologies = () => {
        setShowTechnologies(!showTechnologies);
    };

    return (
        <><nav className={styles.navbar}>
            <div className={styles.links}>
                <ul>
                    <li>Projeto</li>
                    <li>Sobre mim</li>
                    <li>Tecnologias</li>
                </ul>
            </div>
            <div className={styles.icons}>
                <ul>
                    <li><a target="_blank" href="https://github.com/LrNALX"><FaGithub className={styles.iconSize} /></a></li>
                    <li><a target="_blank" href="https://www.linkedin.com/in/lorenzo-aleixo-192338264/"><FaLinkedin className={styles.iconSize} /></a></li>
                </ul>
            </div>

        </nav>

        
        </>
    );
}

export default Navbar;