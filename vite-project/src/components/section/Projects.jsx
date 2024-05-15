import styles from './Projects.module.css'
import landing from '../../image/landing-dnc.png'
import ccxp from '../../image/ccxp.png'
import portfolio from '../../image/portfolio.png'
import tempo from '../../image/tempo.png'
import Cards from '../elements/Cards'

function Projects() {
    return (
        <section className={styles.Projects} id="projects">

            <h1>Projetos</h1>
            <div className={styles.cardSection}>
                <Cards 
                    img={landing} title='Landing Page DNC' tech='HTML e CSS.'
                    description='Landing page, primeiro projeto feito na DNC '
                    site='https://landingpagednc12.netlify.app'
                    btnText='Clique aqui!'
                    repo='https://github.com/LrNALX/projeto-landing-page?tab=readme-ov-file' />
                <Cards
                 img={ccxp} title='Primeiro desafio DNC' tech='HTML, CSS e JS.'
                    description='Projeto de landing page feito para estudos'
                    site='https://ccxpexercicio.netlify.app'
                    btnText='Clique aqui!'
                    repo='https://github.com/LrNALX/projetoccxpdnc' />
            </div>

            <div className={styles.cardSection}>
                <Cards 
                    img={portfolio} title='Portfolio' tech='HTML,CSS e JS.'
                    description='Modelo de portfolio proposto como exercicio.'
                    site='https://exercicio-port-dnc.netlify.app'
                    btnText='Clique aqui'
                    repo='https://github.com/LrNALX/Exercicio-portifolio' />
                <Cards
                    img={tempo} title='Tempo' tech='HTML,CSS,JS,REACT'
                    description='Desafio para aprender como consumir Api'   
                    site='https://desafio2dnc-consumindoapi.netlify.app'
                    btnText='Clique aqui!'
                    repo='https://github.com/LrNALX/desafio2dnc' />
            </div>

        </section>

    )
}

export default Projects