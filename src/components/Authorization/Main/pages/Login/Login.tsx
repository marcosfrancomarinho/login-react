import React from 'react';
import style from './Login.module.css';
import { useState } from 'react';
import { sendDataFormLogin } from './Login.script';
import { ResponseError } from './Login.interface';
import { closeAlert } from '../Register/Register.script';
import { useNavigate } from 'react-router-dom';
import Buttons from '../../../../Utils/Buttons/Buttons';

const Login: React.FC = () => {
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState<boolean>(false);
    const [response, setResponse] = useState<ResponseError | undefined>()
    return (
        <section className={style.login}>
            <form
                className={style.login_form}
                onSubmit={(e) => sendDataFormLogin(e, setResponse, setLoading, navigate)} >
                <h2 className={style.login_title}>Faça o Login:</h2>
                <div className={style.login_form_container_email}>
                    <label
                        htmlFor="email"
                        className={style.login_form_label_email}>
                        Email:
                    </label>
                    <input
                        type="email"
                        name='email'
                        id='email'
                        required
                        autoComplete='email'
                        className={style.login_form_input_email}
                        placeholder='Email' />
                </div>
                <div className={style.login_form_container_password}>
                    <label
                        htmlFor="password"
                        className={style.login_form_label_password}>
                        Senha:
                    </label>
                    <input
                        type="password"
                        name='password'
                        id='password'
                        required
                        autoComplete='current-password'
                        className={style.login_form_input_password}
                        placeholder='Senha' />
                </div>
                <div className={style.login_form_btn_group}>
                    <Buttons type='submit' value={isLoading ? 'Carregando...' : 'Entrar'} />
                    <Buttons type='reset' value='Cancelar' />
                </div>
            </form>
            {response && (
                <div className={
                    `${style.login_alert}
                    ${!response?.Ok ? style.login_alert_danger : ''}`}>
                    <button
                        onClick={() => closeAlert(setResponse)}
                        className={style.login_alert_btn_close}>
                        &#10006;
                    </button>
                    <span className={style.login_alert_message}>{response?.message}</span>
                </div>
            )}
        </section>
    )
}

export default Login;