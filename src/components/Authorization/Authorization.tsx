import React from 'react';
import Headers from '../Utils/Headers/Headers';
import Main from './Main/Main';
import Footer from '../Utils/Footer/Footer';
import { Params } from './Authorization.interface';


const Authorization: React.FC = () => {
    const attr: Params = {
        brand: 'Book Store',
        paths: function (path: string): string[] {
            return this.menu.map(item => path + item)
        },
        menu: ['login', 'register']
    }
    return (
        <>
            <Headers brand={attr.brand} menu={attr.menu} paths={attr.paths('/')} />
            <Main />
            <Footer />
        </>
    )
}

export default Authorization;
