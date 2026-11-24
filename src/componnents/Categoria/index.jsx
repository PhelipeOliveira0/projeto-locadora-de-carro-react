import styles from "./Categoria.module.css"
import carArray from "../../assets/carArray"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Categoria() {
    
    
    const {categoria} = useParams();
    const carrosFiltrados = carArray.filter(carros => carros.tipo == categoria);

    return (
        <main>
            <h2 className={styles.titulo}>{categoria.toUpperCase()}</h2>

            <div className={styles.carros}>
                <ol className={styles.lista}>
                    {carrosFiltrados.map(carro => {
                        return(
                        <li key={carro.concessionaria + carro.nome} className={styles.lista__item}>
                            <Link to={`/categoria/${carro.tipo}/${carro.nome}`} className={styles.lista__item__link}>
                                <img className={styles.lista__item__link__imagem} src={"/img/" + carro.tipo + "/" + carro.concessionaria + carro.nome + "/" + carro.concessionaria + carro.nome + "1.png"}
                                    alt={"Foto" + carro.concessionaria + " " + carro.nome} />
                                <h3>{carro.concessionaria + " " + carro.nome}</h3>
                            </Link>
                        </li>
                    )})}

                </ol>

            </div>
        </main>
    )
}

export default Categoria;