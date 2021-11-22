import React from 'react';

type PropsType = {
    count: number;
    maxValue: number;
}
export const Display = ({count, maxValue}: PropsType) => {
    const style = {
        color: count === maxValue ? 'red' : '',
    }
    return (
        <div className={'display'}>
            <div className={'block_display'} style={style}>{count}</div>
        </div>
    )
}