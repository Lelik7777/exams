import React from 'react';

type PropsType = {
    disabled: boolean;
    title: string;
    onClick: () => void;
    className?: string;
}
export const Button = ({disabled, title, onClick, className}: PropsType) => {
    return (

        <button onClick={onClick}
                disabled={disabled}
                className={className}
        >
            {title}
        </button>
    )
}