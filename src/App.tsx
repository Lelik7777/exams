import React, {useEffect, useState} from 'react';
import './App.css';
import {Count} from './exam_5.11.2021/components/Count';
import {Set} from './exam_5.11.2021/components/Set';
import {Button} from './exam_5.11.2021/components/Button';
import {Count2} from './exam_5.11.2021/components/Count2';

export type ActionType = {
    type: 'setMaxValue' | 'setMinValue' | 'changeCount' | 'setInitialValue' | 'showMessageAndToggle';
    b?: boolean;
    b2?: boolean;
    n?: number;
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
        value.count = value.min;
    }, [value.min])
    useEffect(() => {
        let min = localStorage.getItem('min_value');
        let max = localStorage.getItem('max_value');
        min && max && setValue({...value, max: JSON.parse(max), min: JSON.parse(min)});
    }, []);
    useEffect(() => {
        localStorage.setItem('max_value', JSON.stringify(value.max));
        localStorage.setItem('min_value', JSON.stringify(value.min));
    }, [value.max, value.min]);

    const reducer: (a: ActionType) => void = (action) => {
        switch (action.type) {
            case 'setMinValue':
                return action.n !== undefined && setValue({...value, min: action.n, message: true});

            case 'setMaxValue':
                return action.n !== undefined && setValue({...value, max: action.n, message: true});
            case 'changeCount':
                let count = value.count;
                value.count <= value.max && count++;
                return setValue({...value, count});
            case 'setInitialValue':
                return action.n !== undefined && setValue({...value, count: action.n});
            case 'showMessageAndToggle':
                return action.b !== undefined && action.b2 !== undefined && setValue({
                    ...value,
                    message: action.b,
                    toggle: action.b2
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
                ?
                <div className="counter_2">
                    {
                        !value.toggle ?
                            <Count2
                                data={value}
                                reducer={reducer}
                            />
                            :
                            <Set
                                data={value}
                                reducer={reducer}
                            />
                    }
                </div>
                :
                <div className={'counter_1'}>
                    <Count data={value}
                           reducer={reducer}
                    />
                    <Set
                        reducer={reducer}
                        data={value}
                    />
                </div>
            }
        </div>
    );
}

