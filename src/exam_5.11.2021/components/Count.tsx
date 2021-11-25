import React from 'react';
import {Button} from './Button';
import {Display} from './Display';

type PropsType = {
    maxValue: number;
    minValue: number;
    count: number;
    changeCount: () => void;
    zeroing: () => void;
}
export const Count = ({
                          maxValue,
                          minValue,
                          count,
                          changeCount,
                          zeroing
                      }: PropsType) => {

    console.log(`count=${count}`);
    return (
        <div className={'container'}>
            <Display count={count} maxValue={maxValue} type={true}/>
            <div className={'wrapper_buttons_count'}>
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

