import React, {useState} from 'react';
import {Button} from './Button';
import {Display} from './Display';

export const Count = () => {
    let [count, setCount] = useState<number>(0);
    const changeCount = () => {
        count <= 5 && setCount(count++);
    }
    const zeroing = () => {
        setCount(0);
    }
    return (
        <div className={'container'}>
            <Display count={count}/>

            <div className={'wrapper'}>
                <Button title={'inc'}
                        disabled={count === 5 ? true : false}
                        callBack={changeCount}
                />
                <Button title={'reset'}
                        disabled={count < 5 ? true : false}
                        callBack={zeroing}
                />
            </div>
        </div>
    )
}

