import React from 'react';
import {Span} from './Span';
import {Input} from './Input';

type PropsType = {
    count?: number;
    maxValue: number;
    minValue: number;
    type: boolean;
    changeMaxValue?: (v: number) => void;
    changeMinValue?: (v: number) => void;
    setDisableButSet: (b: boolean) => void;
    disableButSet: boolean;
}
export const Display = ({
                            count,
                            maxValue,
                            minValue,
                            type,
                            changeMaxValue,
                            changeMinValue,
                            setDisableButSet,
                            disableButSet,
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
                    {disableButSet && count}

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
                        changeValue={changeMaxValue}
                        setDisableButSet={setDisableButSet}
                        className={''}
                    />
                </div>
                <div className={'block_dis_set'}>
                    <Span title={'start value'}/>
                    <Input type={'number'}
                           value={minValue}
                           changeValue={changeMinValue}
                           setDisableButSet={setDisableButSet}
                           className={minValue<0?'value_less_zero':''}
                    />
                </div>
            </div>
    )
}