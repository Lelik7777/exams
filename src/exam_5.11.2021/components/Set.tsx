import React from 'react';
import {Button} from './Button';
import {DisplayForSet} from './DisplayForSet';

type PropsType = {
    changeMaxValue: (v: number) => void;
    changeMinValue: (v: number) => void;
    maxValue: number;
    minValue: number;
    setInitialValue: () => void;

}
export const Set = ({
                        changeMinValue,
                        changeMaxValue,
                        minValue,
                        maxValue,
                        setInitialValue,
                    }: PropsType) => {

    const onClick = () => {
        setInitialValue();
    }
    return (
        <div className={'container'}>
            <DisplayForSet
                changeMaxValue={changeMaxValue}
                changeMinValue={changeMinValue}
                minValue={minValue}
                maxValue={maxValue}
            />
            <div className={'wrapper_buttons_count'}>
                <Button disabled={false}
                        title={'set'}
                        onClick={onClick}/>
            </div>

        </div>
    )
}