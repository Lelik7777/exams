import {Count} from './Count';
import {Set} from './Set';
import React from 'react';
import {ActionType, ValueType} from '../../App';

type PropsType={
    value:ValueType;
    reduce: (a: ActionType) => void;
}
export const CounterTwoDisplays = ({value,reduce}:PropsType) => {
    return (
        <div className={'counter_1'}>
            <Count data={value}
                   reduce={reduce}
            />
            <Set
                reduce={reduce}
                data={value}
            />
        </div>
    )
}