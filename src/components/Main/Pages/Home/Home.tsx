import link from '../../../../images/self.jpg'
import style from './Home.module.css';

export default function Home(): JSX.Element {
    return (
        <section className={style.home}>
            <h1>SEJA BEM VINDO A PAGINA INICIAL</h1>
            <img src={link} alt="" />
        </section>

    )
}