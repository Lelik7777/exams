import React from 'react';

type PropsType = {
    disabled: boolean;
    title: string;
    callBack: () => void;

}
export const Button = ({disabled, title, callBack}: PropsType) => {
    return (

        <button onClick={callBack}
                disabled={disabled}
        >
            {title}
        </button>
    )
}