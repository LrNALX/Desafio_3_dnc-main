import htmlLogo from '../../image/skills/html.svg'
import javascriptLogo from '../../image/skills/javascript.svg'
import cssLogo from '../../image/skills/css.svg'
import reactLogo from '../../assets/react.svg'
import styles from './Tech.module.css'
function Tech() {


    return (
        <div >
            <div className={styles.tech}>
                <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank">
                    <img src={htmlLogo} className={styles.logo} alt="html logo" />
                </a>
                <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="_blank">
                    <img src={cssLogo} className={styles.logo} alt="css logo" />
                </a>
                <a href="https://pt-br.react.dev/learn" target="_blank">
                    <img src={reactLogo} className={styles.react} alt="React logo" />
                </a>

                <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank">
                    <img src={javascriptLogo} className={styles.logo} alt="JS logo" />
                </a>
            </div>
        </div>
    )
}

export default Tech