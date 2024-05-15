import Styles from './Cards.module.css'
import ButtonA from '../elements/ButtonA'
import { useState } from 'react'

function Cards({ img, title, description, tech, repo, site, hiddenInfo,btnText}) {
    const [info, setInfo] = useState(false);

    const handleInfoOn = () => {
        setInfo(true);
    };

    const handleInfoOff = () => {
        setInfo(false);
    };

    return (
        <div onMouseLeave={handleInfoOff} onTouchEnd={handleInfoOff} className={Styles.card}>
            {info ? (
                <section>
                    <div className={Styles.hiddenCard}>                      
                            <div className={Styles.hiddenInfo}>
                                <h4>{hiddenInfo}</h4>
                                <ButtonA className={Styles.hiddenBtn} id="btnCards" text={btnText} link={site} />
                            </div>
                    </div>
                    <div>
                        <h3>{title}</h3>
                        <h5>
                            <strong>Tecnologias: </strong> {tech}
                        </h5>
                        <p>{description}</p>
                        <ButtonA  id="btnCards" text={'Repositório'} link={repo} />
                    </div>
                </section>
            ) : (
                <section>
                    <div className={Styles.cardImg} onMouseEnter={handleInfoOn} onTouchStart={handleInfoOn} >
                        <img src={img} alt="ErroIMG" />
                    </div>
                    <div className={Styles.test}>
                        <h3>{title}</h3>
                        <h5>
                            <strong>Tecnologias: </strong> {tech}
                        </h5>
                        <p>{description}</p>
                        <ButtonA className={Styles.btn} id="btnCards" text={'Repositório'} link={repo} />
                    </div>

                </section>
            )}
        </div>
    );
}

export default Cards;