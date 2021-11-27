import React from 'react';
import {Button} from './Button';
import {Display} from './Display';

type PropsType = {
    maxValue: number;
    minValue: number;
    count: number;
    changeCount: () => void;
    setZeroing: () => void;
}
export const Count = ({
                          maxValue,
                          minValue,
                          count,
                          changeCount,
                          setZeroing,
                      }: PropsType) => {

    return (
        <div className={'container'}>
            <Display
                count={count}
                maxValue={maxValue}
                minValue={minValue}
            />
            <div className={'wrapper_buttons_count'}>
                <Button title={'inc'}
                        disabled={count === maxValue ? true : false}
                        onClick={changeCount}
                />
                <Button title={'reset'}
                        disabled={minValue >= 0 && count > minValue ? false : true}
                        onClick={setZeroing}
                />
            </div>

        </div>
    )
}

