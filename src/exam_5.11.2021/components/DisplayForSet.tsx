import React from 'react';
import {Span} from './Span';
import {Input} from './Input';


type PropsType = {
    setMaxValue: (v: number) => void;
    setMinValue: (v: number) => void;
    maxValue: number;
    minValue: number;
    changeDisable: (b: boolean) => void;
}
export const DisplayForSet = ({
                                  setMaxValue,
                                  setMinValue,
                                  maxValue,
                                  minValue,
                                  changeDisable,
                              }: PropsType) => {
    minValue >= 0 && minValue < maxValue ? changeDisable(false) : changeDisable(true);
    return (
        <div className={'display display_set'}>
            <div className={'block_dis_set'}>
                <Span title={'max value'}/>
                <Input
                    type={'number'}
                    changeValue={setMaxValue}
                    value={maxValue}
                    className={minValue >= maxValue ? 'error' : ''}
                    changeDisable={changeDisable}
                />
            </div>
            <div className={'block_dis_set'}>
                <Span title={'start value'}/>
                <Input
                    type={'number'}
                    changeValue={setMinValue}
                    value={minValue}
                    className={minValue < 0 ? 'error' : ''}
                    changeDisable={changeDisable}
                />
            </div>
        </div>
    )
}
