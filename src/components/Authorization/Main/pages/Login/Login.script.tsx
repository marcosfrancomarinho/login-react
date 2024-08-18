import Validation from '../../../../../Error/Error';
import ValidationInterface from '../../../../../Error/Error.interface';
import { DatasFormLogin, ResponseError } from "./Login.interface";
import { NavigateFunction } from "react-router-dom";
const validation: ValidationInterface = new Validation();

export async function sendDataFormLogin(
    e: React.FormEvent<HTMLFormElement>,
    setResponse: React.Dispatch<React.SetStateAction<ResponseError | undefined>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    navigate: NavigateFunction
): Promise<void> {
    try {
        e.preventDefault();
        setLoading(true);
        setResponse(undefined);
        const { email, password } = datasFormLogin(e);
        validation.verifyUserLogin(email, password);
        await loginUserServer(email, password)

        navigate('/prime');
    } catch (error) {
        setResponse({
            message: (error as Error).message,
            Ok: false,
        });
    } finally {
        setLoading(false)
    }
}

function datasFormLogin(e: React.FormEvent<HTMLFormElement>): DatasFormLogin {
    const dataForm: FormData = new FormData(e.currentTarget);
    const datas = Object.fromEntries(dataForm.entries()) as unknown as DatasFormLogin;
    return datas;
}

async function loginUserServer(email: string, password: string): Promise<void> {
    try {
        const response = await fetch('https://login-user-q30w.onrender.com/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const datas = await response.json();
        if (!response.ok) {
            throw new Error(datas.error || 'Erro ao logar o usuário.');
        }
        const token: string | null = response.headers.get('Authorization-Token');
        if (token) {
            setSessionStorage(token);
        }
    } catch (error) {
        throw new Error((error as Error).message || 'Ocorreu um erro desconhecido.');
    }
}

function setSessionStorage(token: string): void {
    window.sessionStorage.setItem('token', token);
}