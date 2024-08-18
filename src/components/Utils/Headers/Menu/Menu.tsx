import React from 'react';
import { Link } from 'react-router-dom';
import style from './Menu.module.css';
import { ParamsLinks } from './Menu.interface';


const Menu: React.FC<ParamsLinks> = ({ items, stateBtn, paths }) => {
    return (
        <nav className={`${style.menu} ${stateBtn ? style.menu_item_toggle : ''}`}>
            {items?.map((item, i) => {
                return (
                    <Link
                        key={i}
                        className={style.menu_item}
                        to={paths[i]}>
                        {item}
                    </Link>
                )
            })}
        </nav>
    )
}
export default Menu;