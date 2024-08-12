import { Routes, Route } from 'react-router-dom';
import style from './Main.module.css'
import Home from './Pages/Home/Home';
import Compras from './Pages/Compras/Compras';
import Contato from './Pages/Contato/Contato';

export default function Main(): JSX.Element {
    return (
        <main className={style.main}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/compras' element={<Compras />} />
                <Route path='/contato' element={<Contato />} />
            </Routes>
        </main>
    )
}