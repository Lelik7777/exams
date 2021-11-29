import React, {useState} from 'react';
import {Button} from './Button';
import {DisplayForSet} from './DisplayForSet';

type PropsType = {
    setMaxValue: (v: number) => void;
    setMinValue: (v: number) => void;
    maxValue: number;
    minValue: number;
    showMessage: (b: boolean) => void;
}
export const Set = ({
                        setMinValue,
                        setMaxValue,
                        minValue,
                        maxValue,
                        showMessage,
                    }: PropsType) => {
    const [disableSet, setDisableSet] = useState(true);
    const onClick = () => {
        debugger
        setDisableSet(true);
        showMessage(false);

        console.log(disableSet)
    }
    const changeDisableSet = (b: boolean) => {
        setDisableSet(b);
    }
    return (
        <div className={'container'}>
            <DisplayForSet
                setMaxValue={setMaxValue}
                setMinValue={setMinValue}
                minValue={minValue}
                maxValue={maxValue}
                changeDisable={changeDisableSet}
            />
            <div className={'wrapper_buttons_count'}>
                <Button disabled={disableSet}
                        title={'set'}
                        onClick={onClick}
                />
            </div>

        </div>
    )
}