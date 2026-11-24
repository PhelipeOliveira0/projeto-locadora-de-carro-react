import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import carArray from '../../assets/carArray';

const carrosVitrine = [];

function filtroCarros(carros){
    const carroAleatorio = Math.floor(Math.random() * carArray.length);
    for(carros.length; carros.length <= 3;){
        if(carros.includes(carroAleatorio)){
            filtroCarros(carros)
        }else{
            carros.push(carroAleatorio)
        }
    }
}

filtroCarros(carrosVitrine)

function Home() {
    return (

        <main>
            <div className={styles.apresentacao}>
                <img src="/projeto-locadora-de-carro-react/img/mascote.png" alt="mascote da pagina" className={styles.apresentacao__logo} />
                <h2 className={styles.apresentacao__frase}>Qual tipo de carro está buscando no momento?</h2>

            </div>

            <ol className={styles.lista}>
                <li key="suv" className={styles.lista__Item}><Link to={"/categoria/Suv"} className={styles.lista__Item__link}>SUV</Link></li>
                <li key="esportivo" className={styles.lista__Item}><Link to={"/categoria/Esportivo"} className={styles.lista__Item__link}>ESPORTIVO</Link></li>
                <li key="sedan" className={styles.lista__Item}><Link to={"/categoria/Sedan"} className={styles.lista__Item__link}>SEDAN</Link></li>
                <li key="pickup" className={styles.lista__Item}><Link to={"/categoria/Pickup"} className={styles.lista__Item__link}>PICKUP</Link></li>
            </ol>
            <div className={styles.sugestoes}>
                <h2 className={styles.sugestoes__titulo}>Algumas sugestões</h2>
                <ol className={styles.sugestoes__lista}>
                    {carrosVitrine.map(carro => {
                        return (
                            <li className={styles.sugestoes__lista__objeto} key={carArray[carro].concessionaria + carArray[carro].nome}>
                                <Link to={"/categoria/" + carArray[carro].tipo + "/" + carArray[carro].nome} className={styles.sugestoes__lista__objeto__link}>
                                    <img src={"/projeto-locadora-de-carro-react/img/" + carArray[carro].tipo + "/" + carArray[carro].concessionaria + carArray[carro].nome + "/" + carArray[carro].concessionaria + carArray[carro].nome + "1.png"}
                                        alt={"foto" + carArray[carro].concessionaria + " " + carArray[carro].nome} className={styles.sugestoes__lista__objeto__imagem} />
                                    <h3 className={styles.sugestoes__lista__objeto__titulo}> {carArray[carro].concessionaria + " " + carArray[carro].nome}</h3>
                                </Link>
                            </li>
                        );
                    })}
                </ol>
            </div>
        </main>

    )

}

export default Home