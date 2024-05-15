import styles from './ButtonA.module.css'


function ButtonA({ text, link}) {
    return (
        <div className={styles.transparent}>
            <a className={styles.transparent} target="_blank" href={link}>
                <button className={styles.btn}>{text}</button>
            </a>
        </div >
    )
} 
export default ButtonA