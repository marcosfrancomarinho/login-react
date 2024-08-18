import React, { useState } from 'react';
import style from './Register.module.css';
import { sendDataFormRegister, closeAlert } from './Register.script';
import { ResponseError } from './Register.interface';
import { useNavigate } from 'react-router-dom';
import Buttons from '../../../../Utils/Buttons/Buttons';



const Register: React.FC = () => {
    const [response, setResponse] = useState<ResponseError | undefined>(undefined)
    const [isLoading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();
    return (
        <section className={style.register}>
            <form
                className={style.register_form}
                onSubmit={(e) => sendDataFormRegister(e, setResponse, navigate, setLoading)} >
                <h2 className={style.register_title}>Faça o seu cadastro:</h2>
                <div className={style.register_form_container_name}>
                    <label
                        htmlFor="name"
                        className={style.register_form_label_name}>
                        Nome do usuário:
                    </label>
                    <input
                        type="text"
                        name='name'
                        id='name'
                        className={style.register_form_input_name}
                        autoComplete='username'
                        required
                        placeholder='Nome' />
                </div>
                <div className={style.register_form_container_email}>
                    <label
                        htmlFor="email"
                        className={style.register_form_label_email}>
                        Email:
                    </label>
                    <input
                        type="email"
                        name='email'
                        id='email'
                        required
                        autoComplete='email'
                        className={style.register_form_input_email}
                        placeholder='Email' />
                </div>
                <div className={style.register_form_container_password}>
                    <label
                        htmlFor="password"
                        className={style.register_form_label_password}>
                        Senha:
                    </label>
                    <input
                        type="password"
                        name='password'
                        id='password'
                        required
                        autoComplete='current-password'
                        className={style.register_form_input_password}
                        placeholder='Senha' />
                </div>
                <div className={style.register_form_btn_group}>
                    <Buttons
                        type='submit'
                        value={isLoading ? 'Carregando...' : 'Cadastrar'} />
                    <Buttons
                        type='reset'
                        value='Cancelar' />
                </div>
            </form>
            {response && (
                <div className={
                    `${style.register_alert}
                    ${response?.Ok
                        ? style.register_alert_success
                        : style.register_alert_danger}`}>
                    <button
                        onClick={() => closeAlert(setResponse)}
                        className={style.register_alert_btn_close}>
                        &#10006;
                    </button>
                    <span className={style.register_alert_message}>{response?.message}</span>
                </div>
            )}
        </section>
    )
}
export default Register;