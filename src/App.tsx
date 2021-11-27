import React, {useEffect, useState} from 'react';
import './App.css';
import {Count} from './exam_5.11.2021/components/Count';
import {Set} from './exam_5.11.2021/components/Set';

export type ValueType = {
    min: number;
    max: number;
    count: number;
    message: boolean;
}

export function App() {
    const [value, setValue] = useState<ValueType>({
        min: 0,
        max: 0,
        count: 0,
        message: true,
    });
    const [disableSet, setdisableSet] = useState(true);
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
    const showMessage = (message: boolean) => {
        setValue({...value, message});
    }
    const changeDisableSet = (b: boolean) => {
        setdisableSet(b);
    }
    return (
        <div className="app">
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
                showMessage={showMessage}
                disableSet={disableSet}
                changeDisable={changeDisableSet}
            />
        </div>
    );
}

