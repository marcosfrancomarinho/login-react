import React from 'react';
import style from './Initial.module.css';

const Initial: React.FC = () => {
    return (
        <section className={style.initial}>
            <h1 className={style.initial_title}>BOOK STORE</h1>
            <h2 className={style.initial_subtitle}>A Busca do Conhecimento Começa Aqui</h2>
        </section>
    )
}

export default Initial;