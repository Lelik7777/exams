import React from 'react';
import {Span} from './Span';
import {Input} from './Input';

type PropsType = {
    type: boolean;
    count?: number;
    maxValue: number;
    minValue: number;
    changeMaxValue?: (v: number) => void;
    changeMinValue?: (v: number) => void;
    setDisableButSet: (b: boolean) => void;
    disableButSet: boolean;
    text: boolean;
    changeText: (b: boolean) => void;
}
export const Display = ({
                            type,
                            count,
                            maxValue,
                            minValue,
                            changeMaxValue,
                            changeMinValue,
                            setDisableButSet,
                            disableButSet,
                            text,
                            changeText,
                            ...props
                        }: PropsType) => {
    const style = {
        color: count === maxValue ? 'red' : '',
    }
    return (
        type ?
            //for count
            <div className={'display'}>
                <div className={'block_display'} style={style}>
                    {!disableButSet && text && count}
                    {text && 'enter values and press \'set\''}

                </div>
            </div>

            :
            //for set
            <div className={'display display_set'}>
                <div className={'block_dis_set'}>
                    <Span title={'max value'}/>
                    <Input
                        type={'number'}
                        value={maxValue}
                        minValue={minValue}
                        maxValue={maxValue}
                        changeValue={changeMaxValue}
                        setDisableButSet={setDisableButSet}
                        className={maxValue <= minValue ? 'value_less_zero' : ''}
                        changeText={changeText}
                    />
                </div>
                <div className={'block_dis_set'}>
                    <Span title={'start value'}/>
                    <Input type={'number'}
                           value={minValue}
                           maxValue={maxValue}
                           minValue={minValue}
                           changeValue={changeMinValue}
                           setDisableButSet={setDisableButSet}
                           className={minValue < 0 ? 'value_less_zero' : ''}
                           changeText={changeText}
                    />
                </div>
            </div>
    )
}