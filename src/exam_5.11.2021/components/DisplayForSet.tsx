import React from 'react';
import {Span} from './Span';
import {Input} from './Input';
import {ActionType, ValueType} from '../../App';


type PropsType = {
    data: ValueType;
    dispatch: (a: ActionType) => void;
    setDisableSet: (b: boolean) => void;
}
export const DisplayForSet = ({data, dispatch, setDisableSet,}: PropsType) => {
    //
    const changeValue = (n: number) => {
        dispatch({type: 'setMinValue', num: n});
    }
    const changeValue2 = (n: number) => {
        dispatch({type: 'setMaxValue', num: n});
    }
    return (
        <div className={'display display_set'}>
            <div className={'block_dis_set'}>
                <Span title={'max value'}/>
                <Input
                    data={data}
                    type={'number'}
                    changeValue={changeValue2}
                    value={data.max}
                    className={data.min >= data.max ? 'error' : ''}
                    setDisableSet={setDisableSet}
                />
            </div>
            <div className={'block_dis_set'}>
                <Span title={'start value'}/>
                <Input
                    data={data}
                    type={'number'}
                    changeValue={changeValue}
                    value={data.min}
                    className={data.min < 0 || data.min >= data.max ? 'error' : ''}
                    setDisableSet={setDisableSet}
                />
            </div>
        </div>
    )
}
