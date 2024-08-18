import React from 'react';
import style from './Home.module.css';

const Home: React.FC = () => {
    return (
        <section className={style.home}>
            <h1 className={style.home_title}>Seja Bem Vindo a Página Principal</h1>
        </section>
    )
}
export default Home;