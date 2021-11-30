import {Count2} from './Count2';
import {Set} from './Set';
import React from 'react';
import {ActionType, ValueType} from '../../App';

type PropsType = {
    value: ValueType;
    reduce: (a: ActionType) => void;
}
export const CountOneDisplay = ({value,reduce}:PropsType) => {
    return (
        <div className="counter_2">
            {
                !value.toggle ?
                    <Count2 data={value} reduce={reduce}/>
                    :
                    <Set
                        data={value}
                        reduce={reduce}
                    />
            }
        </div>
    )
};