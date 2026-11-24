import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import styles from "./Header.module.css";



function Header() {

    let lista = useRef(null)



    function mostrarLista() {
        lista.current.classList.toggle(styles.hidden)
    }
    const [menuAberto, setMenuAberto] = useState(false);


    return (
        <header className={styles.header}>
            <ol className={styles.listaPrincipal}>

                <button onClick={() => setMenuAberto(!menuAberto)} className={`${styles.menuHamburguer} ${styles.menuHamburguerBtn}`}>
                    <img src="/projeto-locadora-de-carro-react/img/menuHamburguer.svg" alt="Menu" />
                </button>

                <nav className={`${styles.menuMobile} ${menuAberto ? styles.aberto : ""} ${styles.menuHamburguer}`}>
                    <ul>
                        <li key="suv" className={styles.lista__Item}><Link to={"/categoria/Suv"} className={styles.lista__Item__link}>SUV</Link></li>
                        <li key="esportivo" className={styles.lista__Item}><Link to={"/categoria/Esportivo"} className={styles.lista__Item__link}>ESPORTIVO</Link></li>
                        <li key="sedan" className={styles.lista__Item}><Link to={"/categoria/Sedan"} className={styles.lista__Item__link}>SEDAN</Link></li>
                        <li key="pickup" className={styles.lista__Item}><Link to={"/categoria/Pickup"} className={styles.lista__Item__link}>PICKUP</Link></li>
                    </ul>
                </nav>


                <li key="home">
                    <Link to="/" className={styles.listaPrincipal__item__link}>HOME</Link>
                </li>
                <li key="sobrenos">
                    <Link to="/aboutUs" className={styles.listaPrincipal__item__link}>SOBRE NÓS</Link>
                </li>
                <li key="faleconosco">
                    <Link to="/talkToUs" className={styles.listaPrincipal__item__link}>FALE CONOSCO</Link>
                </li>
                <li key="categorias" className={`${styles.listaPrincipal__item} ${styles.listaPrincipal__item__link} ${styles.listaPrincipal__item__link__menuEscondido}`} onMouseOver={mostrarLista} onMouseOut={mostrarLista}>
                    CATEGORIAS
                    <ol ref={lista} className={` ${styles.listaPrincipal__item__link__listaEscondida} ${styles.hidden}`} >
                        <li key="suv" className={`${styles.listaPrincipal__item__link__listaEscondida__item}`}><Link to={"/categoria/Suv"} className={`${styles.listaPrincipal__item__link__listaEscondida__item__link}`}>SUV</Link></li>
                        <li key="esportivo" className={`${styles.listaPrincipal__item__link__listaEscondida__item}`}><Link to="/categoria/Esportivo" className={`${styles.listaPrincipal__item__link__listaEscondida__item__link}`}>ESPORTIVO</Link></li>
                        <li key="sedan" className={`${styles.listaPrincipal__item__link__listaEscondida__item}`}><Link to="/categoria/Sedan" className={`${styles.listaPrincipal__item__link__listaEscondida__item__link}`}>SEDAN</Link></li>
                        <li key="pickup" className={`${styles.listaPrincipal__item__link__listaEscondida__item}`}><Link to="/categoria/Pickup" className={`${styles.listaPrincipal__item__link__listaEscondida__item__link}`}>PICKUPS</Link></li>
                    </ol>
                </li>
            </ol>
            <img src="/projeto-locadora-de-carro-react/img/logo.png" alt="logo site" className={styles.header__logo} />

        </header>
    )
}

export default Header