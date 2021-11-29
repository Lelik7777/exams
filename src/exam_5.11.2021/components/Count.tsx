import React from 'react';
import {Button} from './Button';
import {Display} from './Display';

type PropsType = {
    maxValue: number;
    minValue: number;
    count: number;
    changeCount: () => void;
    setInitialValue: (m: number) => void;
    message: boolean;
}
export const Count = ({
                          maxValue,
                          minValue,
                          count,
                          changeCount,
                          setInitialValue,
                          message,
                      }: PropsType) => {

    const onClick = () => setInitialValue(minValue);
    return (
        <div className={'container'}>
            <Display
                count={count}
                maxValue={maxValue}
                minValue={minValue}
                message={message}
            />
            <div className={'wrapper_buttons_count'}>
                <Button title={'inc'}
                        disabled={count === maxValue || message ? true : false}
                        onClick={changeCount}
                />
                <Button title={'reset'}
                        disabled={minValue >= 0 && count > minValue ? false : true}
                        onClick={onClick}
                />
            </div>

        </div>
    )
}

