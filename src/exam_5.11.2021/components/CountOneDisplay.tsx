import {Count2} from './Count2';
import {Set} from './Set';
import React from 'react';
import {ActionType, ValueType} from '../../App';

type PropsType = {
    value: ValueType;
    dispatch: (a: ActionType) => void;
}
export const CounterOneDisplay = ({value, dispatch}: PropsType) => {
    return (
        <div className="counter_2">
            {
                value.toggle
                    ? <Set data={value} dispatch={dispatch}/>
                    : <Count2 data={value} dispatch={dispatch}/>
            }
        </div>
    )
};