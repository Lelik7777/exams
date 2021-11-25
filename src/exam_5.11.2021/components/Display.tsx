import React from 'react';
import {Span} from './Span';
import {Input} from './Input';

type PropsType = {
    count?: number;
    maxValue?: number;
    type: boolean;
    changeMaxValue?: (v: number) => void;
    changeMinValue?: (v: number) => void;
}
export const Display = ({
                            count,
                            maxValue,
                            type,
                            changeMaxValue,
                            changeMinValue,
                            ...props
                        }: PropsType) => {
    const style = {
        color: count === maxValue ? 'red' : '',
    }
    return (
        type ?
            //for count
            <div className={'display'}>
                <div className={'block_display'} style={style}>{count}</div>
            </div>

            :
            //for set
            <div className={'display display_set'}>
                <div className={'block_dis_set'}>
                    <Span title={'max value'}/>
                    <Input type={'number'} changeValue={changeMaxValue}/>
                </div>
                <div className={'block_dis_set'}>
                    <Span title={'start value'}/>
                    <Input type={'number'} changeValue={changeMinValue}/>
                </div>
            </div>
    )
}