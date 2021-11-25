import React from 'react';
import {Span} from './Span';
import {Input} from './Input';

type PropsType = {
    changeMaxValue: (v: number) => void;
   changeMinValue: (v: number) => void;
}
export const DisplayForSet = ({changeMaxValue, changeMinValue,}: PropsType) => {
    return (
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