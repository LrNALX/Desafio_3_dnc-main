import styles from './Timeline.module.css'
import React from 'react';


function Timeline() {
    return (
        <section>
            <div className={styles.title} id='timeline'>
                <h1>Sobre mim:</h1>
            </div>
            <div className={styles.verticalConfig}>
                <div className={styles.time}>
                    <div className={styles.pointTitle}>
                        <p>Fase 1</p>
                        <p>Fase 2</p>
                        <p>Fase 3</p>
                        <p>Fase 4</p>
                    </div> 
                </div>
                <div className={styles.lineConfig}>
                    <div className={styles.line}>
                        <div className={styles.point}> </div>
                        <div className={styles.point}> </div>
                        <div className={styles.point}> </div>
                        <div className={styles.point}> </div>
                    </div>
                </div>
                <div className={styles.general}>
                    <div className={styles.info}>
                        <div className={styles.infoText}>
                            <p> Comecei minha jornada na programação com projetos introdutórios, aprendendo os fundamentos através da 
                                construção de uma página web funcional com HTML, CSS e JavaScript.</p>
                        </div>
                        <div className={styles.infoText}>
                            <p >Avancei para desafios envolvendo integrações de APIs, onde explorei solicitações HTTP, manipulação de 
                                dados JSON e integração de respostas de APIs em minhas aplicações.</p>
                        </div>
                        <div className={styles.infoText}>
                            <p >Ao mergulhar no desenvolvimento fullstack, meu portfólio construído com React e Vite tornou-se um marco 
                                significativo, demonstrando minhas habilidades em front-end e back-end.</p>
                        </div>
                        <div className={styles.infoText}>
                            <p >Cada projeto e desafio ao longo do curso marcou uma etapa importante em minha evolução como programador,
                                 proporcionando aprendizado contínuo e crescimento em habilidades técnicas.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 

export default Timeline;