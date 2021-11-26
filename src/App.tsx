import React, {useRef, useState} from 'react';
import './App.css';
import {Count} from './exam_5.11.2021/components/Count';
import {Set} from './exam_5.11.2021/components/Set';

export function App() {

    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(0);
    const [count, setCount] = useState<number>(0);
    const [disableButSet, setDisableButSet] = useState(false);
    const [text, setText] = useState(true);
    const changeMaxValue = (v: number) => {
        setMaxValue(v);
    }

    const changeMinValue = (v: number) => {
        debugger;
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
    const changeText = (b: boolean) => {
        setText(!b);
    }
    return (
        <div className="app">
            <Count count={count}
                   changeCount={changeCount}
                   setZeroing={setZeroing}
                   maxValue={maxValue}
                   minValue={minValue}
                   disableButSet={disableButSet}
                   text={text}
                   changeText={changeText}

                   setDisableButSet={setDisableButSet}
            />
            <Set
                changeMinValue={changeMinValue}
                changeMaxValue={changeMaxValue}
                setInitialValue={setInitialValue}
                setDisableButSet={setDisableButSet}
                disableButSet={disableButSet}
                minValue={minValue}
                maxValue={maxValue}
                changeText={changeText}
                text={text}
            />
        </div>
    );
}

