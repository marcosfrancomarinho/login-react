import { NavigateFunction } from "react-router-dom";
import { ResponsePrime} from "./Prime.interface";

export default async function loadingPage(
    setResponse: React.Dispatch<React.SetStateAction<ResponsePrime| undefined>>,
    navigate: NavigateFunction
): Promise<void> {
    try {
        const token: string = getTokenSessionStorage('token');
        const url: string = 'https://login-user-q30w.onrender.com/prime';
        const datas = await searchDataPrime(url, token);
        setResponse(datas)
    } catch (error) {
        setResponse(undefined);
        navigate('/')
    }
}


async function searchDataPrime(url: string, token: string): Promise<ResponsePrime> {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization-Token': token
            }
        })
        const datas = await response.json();
        if (!response.ok) {
            throw new Error(datas.error)
        }
        return datas as ResponsePrime;
    } catch (error) {
        throw new Error((error as Error).message)
    }
}

function getTokenSessionStorage(value: string): string {
    const token: string | null = window.sessionStorage.getItem(value);
    if (!token) throw new Error('token não foi informado');
    return token;
}
