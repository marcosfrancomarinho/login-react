import { Link } from 'react-router-dom';
import style from './Header.module.css';
import Button from '../utils/Button/Button';

export default function Header(): JSX.Element {
    return (
        <>
            <header className={style.header}>
                <a className={style.header_logo} href="#">Sonho de Bebê</a>
                <nav className={style.header_menu}>
                    <Link className={style.header_menu_link} to="/">
                        <Button type='submit' value='Home' />
                    </Link>
                    <Link className={style.header_menu_link} to="compras">
                        <Button type='reset' value='Compras' />
                    </Link>
                    <Link className={style.header_menu_link} to="contato">
                        <Button type='button' value='Compras' />
                    </Link>
                </nav>
            </header>
        </>
    )

}
