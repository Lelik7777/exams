import React from 'react';

type PropsType = {
    count: number;
    maxValue: number;
    minValue: number;
    message: boolean;
}
export const Display = ({
                            count,
                            maxValue,
                            minValue,
                            message,
                        }: PropsType) => {
    const style = {
        color: count === maxValue ? 'red' : '',
    }
    return (

        <div className={'display'}>
            <div className={'block_display'}>
                {
                    maxValue <= minValue || minValue < 0
                        ?
                        <span className={'message error'}>Incorrect value!</span>
                        :
                        message
                            ?
                            <span className={'message'}>enter values and press 'set'</span>
                            :
                            <span className={'counter'} style={style}>{count}</span>
                }

            </div>
        </div>


    )
}