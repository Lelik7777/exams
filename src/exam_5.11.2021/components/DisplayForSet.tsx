import React from 'react';
import {Span} from './Span';
import {Input} from './Input';


type PropsType = {
    changeMaxValue: (v: number) => void;
    changeMinValue: (v: number) => void;
    maxValue: number;
    minValue: number;
}
export const DisplayForSet = ({
                                  changeMaxValue,
                                  changeMinValue,
                                  maxValue,
                                  minValue,
                              }: PropsType) => {
    return (
        <div className={'display display_set'}>
            <div className={'block_dis_set'}>
                <Span title={'max value'}/>
                <Input
                    type={'number'}
                    changeValue={changeMaxValue}
                    value={maxValue}
                    className={''}//stub
                />
            </div>
            <div className={'block_dis_set'}>
                <Span title={'start value'}/>
                <Input
                    type={'number'}
                    changeValue={changeMinValue}
                    value={minValue}
                    className={''}//stub
                />
            </div>
        </div>
    )
}
