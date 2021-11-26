import React from 'react';

type PropsType = {
    disabled: boolean;
    title: string;
    onClick: () => void;

}
export const Button = ({disabled, title, onClick}: PropsType) => {
    return (

        <button onClick={onClick}
                disabled={disabled}
        >
            {title}
        </button>
    )
}