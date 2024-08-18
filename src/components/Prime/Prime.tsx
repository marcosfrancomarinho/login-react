import React, { useEffect, useState } from 'react';
import loadingPage from './Prime.script';
import { ResponsePrime } from './Prime.interface';
import { useNavigate, NavigateFunction } from 'react-router-dom';
import Headers from '../Utils/Headers/Headers';
import { Params } from '../Authorization/Authorization.interface';
import Main from './Main/Main'
import Footer from '../Utils/Footer/Footer';



const Prime: React.FC = () => {

    const [response, setResponse] = useState<ResponsePrime | undefined>(undefined);

    const navigate: NavigateFunction = useNavigate();

    useEffect(() => { loadingPage(setResponse, navigate) }, []);
    const attr: Params = {
        brand: 'Book Store',
        paths: function (path: string): string[] {
            return this.menu.map(item => path + item)
        },
        menu: ['novidades', 'populares', 'suporte']
    }
    return (
        <>
            {response && (
                <>
                    <Headers
                        brand={attr.brand}
                        menu={attr.menu}
                        paths={attr.paths('/prime/')}
                    />
                    <Main />
                    <Footer />
                </>
            )}
        </>
    )
}
export default Prime;
