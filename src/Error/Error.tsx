import ValidationInterface from "./Error.interface";

export default class Validation implements ValidationInterface {
    public verifyName(name: string): void {
        this.isEmpty(name, 'nome');
        this.minLengthString(name, 3, 'Nome');
    }
    public verifyEmail(email: string): void {
        this.isEmpty(email, 'email');
        this.regexValidation(email);
    }
    public verifyPassword(password: string): void {
        this.isEmpty(password, 'senha');
        this.minLengthString(password, 8, 'Senha');
    }
    public verifyUserRegister(name: string, email: string, password: string): void {
        this.verifyName(name);
        this.verifyEmail(email);
        this.verifyPassword(password);
    }
    public verifyUserLogin(email: string, password: string): void {
        this.verifyEmail(email);
        this.verifyPassword(password);
    }
    private isEmpty(str: string, input: string): void {
        if (str.trim().length === 0) {
            throw new Error(`Campo ${input} está vazio`)
        }
    }
    private minLengthString(value: string, len: number, type: string): void {
        const length: number = value.trim().length
        if (length < len) {
            throw new Error(
                `${type} deve conter no minimo ${len} caracteres - comprimento: ${length}`
            );
        }
    }
    private regexValidation(email: string): void {
        const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const result: boolean = emailRegex.test(email);
        if (!result) throw new Error('Email inválido');
    }
}





