import { Link } from "react-router-dom";
import styles from "./Footer.module.css"

function Footer(){


    return(
        <footer className={styles.footer}>
            <p>Conteúdo criado única e exclusivamente para práticar React, para mais projetos: <Link className={styles.footer__link} to="https://github.com/PhelipeOliveira0">https://github.com/PhelipeOliveira0</Link></p>
        </footer>
    )
}

export default Footer;