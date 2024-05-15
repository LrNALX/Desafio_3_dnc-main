import styles from '../section/Footer.module.css'
import { FaGithub } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa6';


function Footer() {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.contact}>
                    <h2>Meu contato:</h2>
                    <h2>(55) 9 9655-9890</h2>
                </div>
                <div>
                    <h2>Email:</h2>
                    <h2>lorenzo.aleixo@hotmail.com</h2>
                </div>
                <div className={styles.icons}>
                    <ul>
                        <li>
                            <a target="_blank" href="https://github.com/LrNALX"><FaGithub className={styles.iconSize} /></a>
                        </li>
                        <li>
                            <a target="_blank" href="https://www.linkedin.com/in/lorenzo-aleixo-192338264/"><FaLinkedin className={styles.iconSize} /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
 
export default Footer;