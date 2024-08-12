import { useEffect, useState } from 'react'
import style from './Button.module.css'

export default function Button({ value, type }: ParamsButton): JSX.Element {

    const [stateButton, setStateButton] = useState<string>(style.button)
    useEffect(() => {
        if (type === 'submit') {
            setStateButton(style.submit)
        } else if (type === 'reset') {
            setStateButton(style.reset)
        } else {
            setStateButton(style.button)
        }
    },[type])

    return (
        <button
            className={`${style.button} ${stateButton}`}
            type={type}>
            {value}
        </button>
    )
}

interface ParamsButton {
    value: string,
    type: 'button' | 'submit' | 'reset'
}