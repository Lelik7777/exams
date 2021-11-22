import React from 'react';

type PropsType = {
    title: string;
}
export const Span = ({title}: PropsType) => {
    return <span className={'span_value'}>{title}</span>
}