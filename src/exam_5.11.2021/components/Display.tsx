import React from 'react';
import {ValueType} from '../../App';

type PropsType = {
    data: ValueType;
}
export const Display = ({data}: PropsType) => {
    const style = {
        color: data.count === data.max ? 'red' : '',
    }
    return (

        <div className={'display'}>
            <div className={'block_display'}>
                {
                    data.max <= data.min || data.min < 0
                        ?
                        <span className={'message error'}>Incorrect value!</span>
                        :
                        data.message
                            ?
                            <span className={'message'}>enter values and press 'set'</span>
                            :
                            <span className={'counter'} style={style}>{data.count}</span>
                }

            </div>
        </div>


    )
}