import React from 'react';
import {Button} from './Button';
import {Display} from './Display';

type PropsType = {
    maxValue: number;
    minValue: number;
    count: number;
    changeCount: () => void;
    setZeroing: () => void;
    disableButSet: boolean;
    setDisableButSet: (b: boolean) => void;
    text: boolean;
    changeText: (b: boolean) => void;
}
export const Count = ({
                          maxValue,
                          minValue,
                          count,
                          changeCount,
                          setZeroing,
                          disableButSet,
                          setDisableButSet,
                          text,
                          changeText,
                      }: PropsType) => {

    return (
        <div className={'container'}>
            <Display
                count={count}
                maxValue={maxValue}
                minValue={minValue}
                type={true}
                disableButSet={disableButSet}
                setDisableButSet={setDisableButSet}
                text={text}
                changeText={changeText}
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

