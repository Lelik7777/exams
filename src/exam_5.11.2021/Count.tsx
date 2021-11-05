import React, {useState} from 'react';
import {Button} from './Button';
import {Display} from './Display';

export const Count = () => {
    let [count, setCount] = useState<number>(0);
    const maxValue = 5;
    const minValue = 0;
    const changeCount = () => {
        count <= maxValue && setCount(count++);
    }
    const zeroing = () => {
        setCount(minValue);
    }
    return (
        <div className={'container'}>

            <Display count={count} maxValue={maxValue}/>

            <div className={'wrapper'}>
                <Button title={'inc'}
                        disabled={count === maxValue ? true : false}
                        callBack={changeCount}
                />
                <Button title={'reset'}
                        disabled={count > minValue ? false : true}
                        callBack={zeroing}
                />
            </div>
        </div>
    )
}

