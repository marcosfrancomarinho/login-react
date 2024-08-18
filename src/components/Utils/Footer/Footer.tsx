import React from 'react';
import style from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={style.footer}>
            <h3 className={style.footer_title}>Entre contanto com pelos nossos canais</h3>
            <ul className={style.footer_menu}>
                <li className={style.footer_menu_item}>
                    <a
                        className={style.footer_menu_item_link}
                        href="#">
                        Instagram
                    </a>
                </li>
                <li className={style.footer_menu_item}>
                    <a
                        className={style.footer_menu_item_link}
                        href="#">
                        Git Hub
                    </a>
                </li>
                <li className={style.footer_menu_item}>
                    <a
                        className={style.footer_menu_item_link}
                        href="#">
                        Facebook
                    </a>
                </li>
            </ul>
        </footer>
    )
}
export default Footer;