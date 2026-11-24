import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import styles from './Car.module.css';
import carArray from '../../assets/carArray';
import { useParams } from 'react-router-dom';



function Car() {

    const {categoria} = useParams();
    const {carro} = useParams();
    const carrosFiltradosCategoria = carArray.filter(carros => carros.tipo == categoria);
    const carroFiltradoArray = carrosFiltradosCategoria.filter(carroFiltro => carroFiltro.nome == carro)
    const carroFiltrado = carroFiltradoArray[0]
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const imagens = [
        `/projeto-locadora-de-carro-react/img/${carroFiltrado.tipo}/${carroFiltrado.concessionaria}${carroFiltrado.nome}/${carroFiltrado.concessionaria}${carroFiltrado.nome}1.png`,
        `/projeto-locadora-de-carro-react/img/${carroFiltrado.tipo}/${carroFiltrado.concessionaria}${carroFiltrado.nome}/${carroFiltrado.concessionaria}${carroFiltrado.nome}2.png`,
        `/projeto-locadora-de-carro-react/img/${carroFiltrado.tipo}/${carroFiltrado.concessionaria}${carroFiltrado.nome}/${carroFiltrado.concessionaria}${carroFiltrado.nome}3.png`,
        `/projeto-locadora-de-carro-react/img/${carroFiltrado.tipo}/${carroFiltrado.concessionaria}${carroFiltrado.nome}/${carroFiltrado.concessionaria}${carroFiltrado.nome}4.png`,
        `/projeto-locadora-de-carro-react/img/${carroFiltrado.tipo}/${carroFiltrado.concessionaria}${carroFiltrado.nome}/${carroFiltrado.concessionaria}${carroFiltrado.nome}5.png`,
        `/projeto-locadora-de-carro-react/img/${carroFiltrado.tipo}/${carroFiltrado.concessionaria}${carroFiltrado.nome}/${carroFiltrado.concessionaria}${carroFiltrado.nome}6.png`,
    ];

    return (
        <main>
            <div className={styles.apresentacao}>
                <div className={styles.apresentacao__galeria}>
                    <Swiper modules={[Navigation, Thumbs]} navigation thumbs={{ swiper: thumbsSwiper }} className={styles.apresentacao__galeria__swiperPrincipal}>
                        {imagens.map((imagem, index) => (
                            <SwiperSlide key={index}>
                                <img src={imagem} alt={`Imagem ${index + 1}`} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Swiper modules={[FreeMode, Thumbs]} onSwiper={setThumbsSwiper} spaceBetween={8} slidesPerView={6} freeMode watchSlidesProgress className={styles.apresentacao__galeria__swiperMiniaturas}>
                        {imagens.map((imagem, index) => (
                            <SwiperSlide key={index}>
                                <img src={imagem} alt={`Miniatura ${index + 1}`} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <form action="" className={styles.informacoesAlugel}>
                    <h2 className={styles.informacoesAlugel__titulo}>Toyota Corolla Cross</h2>
                    <input type="text" placeholder="Primeiro Nome" className={styles.informacoesAlugel__inputText} />
                    <input type="text" placeholder="Sobrenome" className={styles.informacoesAlugel__inputText} />
                    <input type="email" placeholder="Email" className={styles.informacoesAlugel__inputText} />
                    <input type="text" placeholder="telefone" className={styles.informacoesAlugel__inputText} />
                    <input type="submit" className={styles.informacoesAlugel__inputSubmit} />
                </form>
            </div>
            <div className={styles.informacoes}>
                <ol className={styles.informacoes__categoria}>
                    <li key="estiloChassi" className={styles.informacoes__categoria__item}>
                        <h3 className={styles.informacoes__categoria__item__titulo}>Estilo Do Chassi</h3>
                        <p className={styles.informacoes__categoria__item__legenda}>{carroFiltrado.chassi}</p>
                    </li>
                    <li key="eficiencia" className={styles.informacoes__categoria__item}>
                        <h3 className={styles.informacoes__categoria__item__titulo}>Eficiência Urbano/Rodoviário</h3>
                        <p className={styles.informacoes__categoria__item__legenda}>{carroFiltrado.eficiencia}</p>
                    </li>
                    <li key="tracao" className={styles.informacoes__categoria__item}>
                        <h3 className={styles.informacoes__categoria__item__titulo}>Tração</h3>
                        <p className={styles.informacoes__categoria__item__legenda}>{carroFiltrado.tracao}</p>
                    </li>
                    <li key="transmissao" className={styles.informacoes__categoria__item}>
                        <h3 className={styles.informacoes__categoria__item__titulo}>Transmissão</h3>
                        <p className={styles.informacoes__categoria__item__legenda}>{carroFiltrado.transmissao}</p>
                    </li>
                    <li key="motor" className={styles.informacoes__categoria__item}>
                        <h3 className={styles.informacoes__categoria__item__titulo}>Motor</h3>
                        <p className={styles.informacoes__categoria__item__legenda}>{carroFiltrado.motor}</p>
                    </li>
                    <li key="combustivel" className={styles.informacoes__categoria__item}>
                        <h3 className={styles.informacoes__categoria__item__titulo}>Combustível</h3>
                        <p className={styles.informacoes__categoria__item__legenda}>{carroFiltrado.combustivel}</p>
                    </li>
                </ol>
            </div>
        </main>

    );
}

export default Car;