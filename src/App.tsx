import React, {useState} from 'react';
import './App.css';
import {Count} from './exam_5.11.2021/components/Count';
import {Set} from './exam_5.11.2021/components/Set';

export function App() {
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(0);
    const changeMaxValue = (v: number) => {
        setMaxValue(v);
        console.log(maxValue);
    }
    const changeMinValue = (v: number) => {
        setMinValue(v);
        console.log(minValue)
    }
    let [count, setCount] = useState<number>(minValue);
    console.log('min=', minValue);
    const changeCount = () => {
        let value = count;
        count <= maxValue && value++;
        setCount(value);
    }
    const zeroing = () => {
        setCount(minValue);
    }
    return (
        <div className="app">
            <Count count={count}
                   changeCount={changeCount}
                   zeroing={zeroing}
                   maxValue={maxValue}
                   minValue={minValue}
            />
            <Set
                changeMinValue={changeMinValue} changeMaxValue={changeMaxValue}/>
        </div>
    );
}

