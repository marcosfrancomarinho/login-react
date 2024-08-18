export default interface ValidationInterface {
    verifyName(name: string): void,
    verifyPassword(password: string): void,
    verifyEmail(email: string): void,
    verifyUserRegister(name: string, email: string, password: string): void
    verifyUserLogin(email: string, password: string): void
}