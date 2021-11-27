import React, {useEffect, useState} from 'react';
import './App.css';
import {Count} from './exam_5.11.2021/components/Count';
import {Set} from './exam_5.11.2021/components/Set';

export type ValueType = {
    min: number;
    max: number;
    count: number;
}

export function App() {
    const [value, setValue] = useState<ValueType>({
        min: 0,
        max: 0,
        count: 0,
    });
    /*const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(0);
    const [count, setCount] = useState<number>(0);
    const [disableButSet, setDisableButSet] = useState(false);
    const [text, setText] = useState(true);*/
    useEffect(() => {
        let min = localStorage.getItem('min_value');
        let max = localStorage.getItem('max_value');
        min&&max&&setValue({...value, max: JSON.parse(max),min:JSON.parse(min)});
    }, []);
    useEffect(() => {
        localStorage.setItem('max_value', JSON.stringify(value.max));
        localStorage.setItem('min_value', JSON.stringify(value.min));
    }, [value.max,value.min]);


    const changeMaxValue = (max: number) => {
        setValue({...value, max});
    }

    const changeMinValue = (min: number) => {
        setValue({...value, min});
    }
    const changeCount = () => {
        let count = value.count;
        value.count <= value.max && count++;
        setValue({...value, count})
    }
   /* const setZeroing = () => {
        // setCount(minValue);
        setValue({...value, count: value.min})
    }*/
    const setInitialValue = () => {
        //setCount(minValue);
    }
    return (
        <div className="app">
            <Count count={value.count}
                   changeCount={changeCount}
                   setZeroing={()=>{}}
                   maxValue={value.max}
                   minValue={value.min}
            />
            <Set
                changeMinValue={changeMinValue}
                changeMaxValue={changeMaxValue}
                maxValue={value.max}
                minValue={value.min}
                setInitialValue={setInitialValue}
            />
        </div>
    );
}

