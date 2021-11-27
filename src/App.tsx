import React, {useEffect, useState} from 'react';
import './App.css';
import {Count} from './exam_5.11.2021/components/Count';
import {Set} from './exam_5.11.2021/components/Set';

export function App() {

    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(0);
    const [count, setCount] = useState<number>(0);
    const [disableButSet, setDisableButSet] = useState(false);
    const [text, setText] = useState(true);

    useEffect(() => {
        let max = localStorage.getItem('max_value');
        max && setMaxValue(JSON.parse(max));
        let min = localStorage.getItem('min_value');
        min && setMinValue(JSON.parse(min));
    }, [])
    useEffect(() => {
        localStorage.setItem('min_value', JSON.stringify(minValue));
        localStorage.setItem('max_value', JSON.stringify(maxValue));

    }, [minValue, maxValue])
    const changeMaxValue = (v: number) => {
        setMaxValue(v);
    }

    const changeMinValue = (v: number) => {
        setMinValue(v);
        console.log('min' + minValue)
    }
    const changeCount = () => {
        let value = count;
        count <= maxValue && value++;
        setCount(value);
    }
    const setZeroing = () => {
        setCount(minValue);
    }
    const setInitialValue = () => {
        setCount(minValue);
    }
    return (
        <div className="app">
            <Count count={count}
                   changeCount={changeCount}
                   setZeroing={setZeroing}
                   maxValue={maxValue}
                   minValue={minValue}
            />
            <Set
                changeMinValue={changeMinValue}
                changeMaxValue={changeMaxValue}
                maxValue={maxValue}
                minValue={minValue}
                setInitialValue={setInitialValue}
            />
        </div>
    );
}

