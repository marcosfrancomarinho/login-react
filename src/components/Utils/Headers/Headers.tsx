import React, { useState } from 'react';
import style from './Headers.module.css';
import Menu from './Menu/Menu';
import { Link } from 'react-router-dom';
import { ParamsHeaders } from './Headers.interface';
import toggleMenu from './Headers.script';


const Headers: React.FC<ParamsHeaders> = ({ brand, menu, paths }) => {
    const [stateBtn, setStateBtn] = useState<boolean>(false);
    return (
        <header className={style.header}>
            <Link className={style.header_brand} to='/'>{brand}</Link>
            <button
                onClick={() => toggleMenu(setStateBtn)}
                className={style.header_button_toggle}>
                ☰
            </button>
            <Menu stateBtn={stateBtn} items={menu} paths={paths} />
        </header>
    )
}

export default Headers;