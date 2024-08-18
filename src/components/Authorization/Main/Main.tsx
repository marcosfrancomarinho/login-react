import React from 'react';
import { Outlet } from 'react-router-dom';

import style from './Main.module.css'
const Main: React.FC = () => {

    return (
        <>
            <main className={style.main}>
                <Outlet />
            </main>
        </>
    )
}
export default Main;