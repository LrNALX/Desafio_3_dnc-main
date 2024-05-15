import styles from './Presentation.module.css'
import { useEffect, useState } from 'react'
import ButtonA from '../elements/ButtonA'

function Presentation() {

    const [text, setText] = useState('');
    const toRotate = [' Bem vindo ao meu portifolio ', '  Sou Amante da Tecnologia', 'Sou Designer Gráfico', 'Estou me tornando um Dev'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 100;
    const [delta, setDelta] = useState(100)
    
    useEffect(() => {
        let ticker = setInterval(() => {
            toType() 
        }, delta)
        return () => { clearInterval(ticker) }
    }, [text])

    const toType = () => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (!isDeleting && updatedText === fullText) {    
            setIsDeleting(true);      
            setDelta(250);

        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop + 1);
        }
    }
 

    return (
        <div id="presentation" className={styles.Presentation}>
            <h1><strong> Olá, eu sou Lorenzo Aleixo.  </strong></h1>
            <h2>    {text}</h2>

            <ul>
                <li>Entusiasta de tecnologia com uma paixão vibrante pela programação!
                Busco constantemente desafios e oportunidades para aplicar minha expertise
                em desenvolvimento de software e contribuir para projetos inovadores.
                estou pronto para enfrentar os desafios do mundo digital e colaborar em projetos
                que impulsionem o progresso tecnológico. Vamos criar algo incrível juntos!</li>
            </ul>

            

            <div><ButtonA  text='Saber mais!' link='https://www.linkedin.com/in/lorenzo-aleixo-192338264/' /></div>

        </div>
    )
} 

export default Presentation