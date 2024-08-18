import React, { useEffect, useState } from 'react';
import { ParamsButtons } from './Buttons.interface';
import style from './Buttons.module.css';

const Buttons: React.FC<ParamsButtons> = ({ type, value }) => {
    const [stateBtn, setStateBtn] = useState<string>('button');

    useEffect(() => {
        if (type === 'submit') {
            setStateBtn(`${style.button_submit}`);
        } else if (type === 'reset') {
            setStateBtn(style.button_reset)
        } else {
            setStateBtn('')
        }
    }, [type]);

    return (
        <button
            className={`${style.button} ${stateBtn}`}
            type={type}>
            {value}
        </button>
    )
}
export default Buttons;