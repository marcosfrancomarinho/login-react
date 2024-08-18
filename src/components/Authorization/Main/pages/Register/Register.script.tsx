import Validation from "../../../../../Error/Error";
import ValidationInterface from "../../../../../Error/Error.interface";
import { ResponseError, DatasFormRegister } from "./Register.interface";
import { NavigateFunction } from 'react-router-dom'
const validation: ValidationInterface = new Validation();

export async function sendDataFormRegister(
    e: React.FormEvent<HTMLFormElement>,
    setResponse: React.Dispatch<React.SetStateAction<ResponseError | undefined>>,
    navigate: NavigateFunction,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
): Promise<void> {
    try {
        e.preventDefault();
        const { name, email, password } = datasFormRegister(e);
        setResponse(undefined);
        setLoading(true);
        // Verificação dos dados do usuário
        validation.verifyUserRegister(name, email, password);
        // Envio dos dados para o servidor
        await registerUserServer(name, email, password);

        setResponse({
            message: "Registro efetuado com sucesso faça o login!",
            Ok: true,
        });
        setTimeout(() => {
            navigate('/login')
        }, 5000);
    } catch (error) {
        setResponse({
            message: (error as Error).message,
            Ok: false,
        });
    } finally {
        setLoading(false)
    }
}

function datasFormRegister(e: React.FormEvent<HTMLFormElement>): DatasFormRegister {
    const dataForm: FormData = new FormData(e.currentTarget);
    const datas = Object.fromEntries(dataForm.entries()) as unknown as DatasFormRegister;
    return datas;
}

async function registerUserServer(name: string, email: string, password: string): Promise<void> {
    try {
        const response = await fetch('https://login-user-q30w.onrender.com/sigin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password })
        });

        const datas = await response.json();

        if (!response.ok) {
            throw new Error(datas.error || 'Erro ao registrar o usuário.');
        }
    } catch (error) {
        throw new Error((error as Error).message || 'Ocorreu um erro desconhecido.');
    }
}


export async function closeAlert(
    setResponse: React.Dispatch<React.SetStateAction<ResponseError | undefined>>
) {
    setResponse(undefined)
}