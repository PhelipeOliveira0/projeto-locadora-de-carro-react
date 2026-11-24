import { Link } from "react-router-dom";
import styles from "./SobreNos.module.css";
import Contatos from "../Contatos";

function SobreNos() {
    return (

        <main>
            <div className={styles.apresentacao}>
                <img src="./img/mascote.png" alt="mascote" className={styles.apresentacao__imagem}/>
                <p className={styles.apresentacao__texto}>Este é um projeto de portfólio que criei para exercitar meu React<br></br><Link to="https://github.com/PhelipeOliveira0/projeto-locadora-de-carro-react.git">Click aqui para ver os arquivos</Link></p>
            </div>
            <Contatos/>
        </main>

    )
}

export default SobreNos;