import React, {useEffect, useState} from 'react';
import './App.css';
import {Count} from './exam_5.11.2021/components/Count';
import {Set} from './exam_5.11.2021/components/Set';
import {Button} from './exam_5.11.2021/components/Button';
import {Count2} from './exam_5.11.2021/components/Count2';

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

    const setMaxValue = (max: number) => {
        setValue({...value, max, message: true});
    }

    const setMinValue = (min: number) => {
        setValue({...value, min, message: true});
    }
    const changeCount = () => {
        let count = value.count;
        value.count <= value.max && count++;
        setValue({...value, count})
    }
    const setInitialValue = (min: number) => {
        setValue({...value, count: min})
    }
    const showMessageAndToggle = (message: boolean, two: boolean) => {
        if (two) {
            setValue({...value, message, toggle: two});
        } else
            setValue({...value, message, toggle: false});
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
                                maxValue={value.max}
                                minValue={value.min}
                                count={value.count}
                                changeCount={changeCount}
                                setInitialValue={setInitialValue}
                                message={value.message}
                                showMessageAndToggle={showMessageAndToggle}
                            />
                            :
                            <Set
                                setMaxValue={setMaxValue}
                                setMinValue={setMinValue}
                                maxValue={value.max}
                                minValue={value.min}
                                showMessageAndToggle={showMessageAndToggle}
                            />
                    }
                </div>
                :
                <div className={'counter_1'}>
                    <Count count={value.count}
                           maxValue={value.max}
                           minValue={value.min}
                           changeCount={changeCount}
                           setInitialValue={setInitialValue}
                           message={value.message}
                    />
                    <Set
                        setMinValue={setMinValue}
                        setMaxValue={setMaxValue}
                        maxValue={value.max}
                        minValue={value.min}
                        showMessageAndToggle={showMessageAndToggle}
                    />
                </div>
            }
        </div>
    );
}

