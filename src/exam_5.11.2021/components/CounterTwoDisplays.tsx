import {Count} from './Count';
import {Set} from './Set';
import React from 'react';
import {ActionType, ValueType} from '../../App';

type PropsType = {
    value: ValueType;
    dispatch: (a: ActionType) => void;
}
export const CounterTwoDisplays = ({value, dispatch}: PropsType) => {
    return (
        <div className={'counter_1'}>
            <Count data={value}
                   dispatch={dispatch}
            />
            <Set
                dispatch={dispatch}
                data={value}
            />
        </div>
    )
}