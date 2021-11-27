import React from 'react';
import {Button} from './Button';
import {DisplayForSet} from './DisplayForSet';

type PropsType = {
    setMaxValue: (v: number) => void;
    setMinValue: (v: number) => void;
    maxValue: number;
    minValue: number;
    showMessage: (b: boolean) => void;
    disableSet: boolean;
    changeDisable: (b: boolean) => void;
}
export const Set = ({
                        setMinValue,
                        setMaxValue,
                        minValue,
                        maxValue,
                        showMessage,
                        disableSet,
                        changeDisable,
                    }: PropsType) => {

    const onClick = () => {
        showMessage(false);
        changeDisable(true);
    }
    return (
        <div className={'container'}>
            <DisplayForSet
                setMaxValue={setMaxValue}
                setMinValue={setMinValue}
                minValue={minValue}
                maxValue={maxValue}
                changeDisable={changeDisable}
            />
            <div className={'wrapper_buttons_count'}>
                <Button disabled={disableSet}
                        title={'set'}
                        onClick={onClick}/>
            </div>

        </div>
    )
}