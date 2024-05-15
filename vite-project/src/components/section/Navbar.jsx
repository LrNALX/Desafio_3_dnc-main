import styles from './Navbar.module.css'
import { useState } from 'react'
import Tech from '../elements/Tech'
import { FaGithub } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa6';
import Nav from 'react-bootstrap/Nav'




function Navbar() {
    const [showTechnologies, setShowTechnologies] = useState(false);

    const handleToggleTechnologies = () => {
        setShowTechnologies(!showTechnologies);
    };

    return (
        <><nav className={styles.navbar}>
            <div className={styles.links}>
                <ul>
                <li><Nav.Link href='#projects'>Projetos</Nav.Link></li>
                    <li><Nav.Link onClick={handleToggleTechnologies}>Tecnologias</Nav.Link></li>
                    <li><Nav.Link href='#timeline'>Sobre mim</Nav.Link></li>
                    
                </ul>
            </div>
            <div className={styles.icons}>
                <ul>
                    <li><a target="_blank" href="https://github.com/LrNALX"><FaGithub className={styles.iconSize} /></a></li>
                    <li><a target="_blank" href="https://www.linkedin.com/in/lorenzo-aleixo-192338264/"><FaLinkedin className={styles.iconSize} /></a></li>
                    </ul>
            </div>

        </nav>
            {showTechnologies && (
                <div>
                    <Tech />
                </div>
            )}
        </>
    );
}

export default Navbar;