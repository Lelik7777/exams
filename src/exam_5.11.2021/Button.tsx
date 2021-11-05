import React from 'react';

type PropsType = {
    disabled: boolean;
    title: string;
    callBack: () => void;

}
export const Button = ({disabled, title, callBack}: PropsType) => {
    const onClick = () => {
        callBack()
    }
    return (

        <button onClick={onClick} disabled={disabled}>{title}</button>
    )
}