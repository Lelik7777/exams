import React, {useState} from 'react';
import {Button} from './Button';
import {DisplayForSet} from './DisplayForSet';

type PropsType = {
    setMaxValue: (v: number) => void;
    setMinValue: (v: number) => void;
    maxValue: number;
    minValue: number;
    showMessageAndToggle: (b: boolean, t: boolean) => void;
}
export const Set = ({
                        setMinValue,
                        setMaxValue,
                        minValue,
                        maxValue,
                        showMessageAndToggle,
                    }: PropsType) => {
    const [disableSet, setDisableSet] = useState(true);
    const onClick = () => {
        setDisableSet(true);
        showMessageAndToggle(false, false);
    }
    return (
        <div className={'container'}>
            <DisplayForSet
                setMaxValue={setMaxValue}
                setMinValue={setMinValue}
                minValue={minValue}
                maxValue={maxValue}
                setDisableSet={setDisableSet}
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