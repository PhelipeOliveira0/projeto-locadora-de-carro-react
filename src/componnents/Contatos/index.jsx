import { Link } from 'react-router-dom';
import styles from './Contatos.module.css';

function Contatos() {

    return (
        <div className={styles.contatos}>
            <div className={styles.contatos__div}>
                <h3 className={styles.contatos__div__titulo}>Contatos</h3>
                <ol className={styles.contatos__div__lista}>
                    <li key="wpp" className={styles.contatos__div__lista__item}>
                        <img className={styles.contatos__div__lista__item__imagem} src="/projeto-locadora-de-carro-react/img/Contatos/Wpp.png" alt="logo whatsapp" />
                        <p className={styles.contatos__div__lista__item__descricao}>+55 (11) 942188349</p>
                    </li>
                    <li key="linkedin" className={styles.contatos__div__lista__item}>
                        <img className={styles.contatos__div__lista__item__imagem} src="/projeto-locadora-de-carro-react/img/Contatos/Linkedin.png" alt="logo Linkedin" />
                        <Link to="https://www.linkedin.com/in/phelipe-oliveira-084ba5197/" className={styles.contatos__div__lista__item__descricao} target="_blank">https://www.linkedin.com/in/phelipe-oliveira-084ba5197/</Link>
                    </li>
                    <li key="github" className={styles.contatos__div__lista__item}>
                        <img className={styles.contatos__div__lista__item__imagem} src="/projeto-locadora-de-carro-react/img/Contatos/Github.png" alt="logo github" />
                        <Link to="https://github.com/PhelipeOliveira0" className={styles.contatos__div__lista__item__descricao} target="_blank">https://github.com/PhelipeOliveira0</Link>
                    </li>
                </ol>

            </div>
        </div>
    )

}

export default Contatos