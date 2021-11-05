import React from 'react';

type PropsType = {
    count: number;
    maxValue: number;
}
export const Display = ({count}: PropsType) => {
    const style = {
        color: count === 5 ? 'red' : '',
    }
    return (
        <div className={'display'}>
            <div style={style}>{count}</div>
        </div>
    )
}