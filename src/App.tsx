import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from './exam_5.11.2021/components/Button';
import {CounterOneDisplay} from './exam_5.11.2021/components/CountOneDisplay';
import {CounterTwoDisplays} from './exam_5.11.2021/components/CounterTwoDisplays';

export type ActionType = {
    type: 'setMaxValue' | 'setMinValue' | 'changeCount' | 'setInitialValue' | 'showMessageAndToggle';
    message?: boolean;
    toggle?: boolean;
    num?: number;
}
export type ValueType = {
    min: number;
    max: number;
    count: number;
    message: boolean;
    variantCounters: boolean;
    toggle: boolean;
}

export function App() {

    const [value, setValue] = useState<ValueType>({
        min: 0,
        max: 0,
        count: 0,
        message: true,
        variantCounters: true,
        toggle: true,
    });

    useEffect(() => {
        setValue({...value, count: value.min})
    }, [value.min])

    useEffect(() => {
        const valueL = localStorage.getItem('counter');

        valueL && setValue({...value, max: JSON.parse(valueL).max, min: JSON.parse(valueL).min});
    }, []);

    useEffect(() => {
        const valueL = {
            max: value.max,
            min: value.min
        }
        localStorage.setItem('counter', JSON.stringify(valueL));
    }, [value.max, value.min]);

    const dispatch: (a: ActionType) => void = (action) => {
        switch (action.type) {
            case 'setMinValue':
                return action.num !== undefined && setValue({...value, min: action.num, message: true});
            case 'setMaxValue':
                return action.num !== undefined && setValue({...value, max: action.num, message: true});
            case 'changeCount':
                let count = value.count;
                value.count <= value.max && count++;
                return setValue({...value, count});
            case 'setInitialValue':
                return action.num !== undefined && setValue({...value, count: action.num});
            case 'showMessageAndToggle':
                return action.message !== undefined && action.toggle !== undefined && setValue({
                    ...value,
                    message: action.message,
                    toggle: action.toggle
                });
            default:
                return setValue(value);
        }
    }

    const onClick = () => {
        setValue({...value, variantCounters: !value.variantCounters});
    }
    return (
        <div className="app">
            <Button disabled={false}
                    title={value.variantCounters ? 'switch two displays' : 'switch one display'}
                    onClick={onClick}
                    className={'switch_counters'}
            />
            {value.variantCounters
                ? <CounterOneDisplay value={value} dispatch={dispatch}/>
                : <CounterTwoDisplays value={value} dispatch={dispatch}/>
            }
        </div>
    );
}
