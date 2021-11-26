import React from 'react';
import {Button} from './Button';
import {Display} from './Display';

type PropsType = {
    changeMaxValue: (v: number) => void;
    changeMinValue: (v: number) => void;
    setInitialValue: () => void;
    setDisableButSet: (b: boolean) => void;
    disableButSet: boolean;
    maxValue: number;
    minValue: number;
    changeText: (b: boolean) => void;
    text: boolean;
}
export const Set = ({
                        changeMinValue,
                        changeMaxValue,
                        setInitialValue,
                        setDisableButSet,
                        disableButSet,
                        minValue,
                        maxValue,
                        changeText,
                        text,
                    }: PropsType) => {

    const onClick = () => {
        setInitialValue();
        setDisableButSet(true);
        changeText(false);
    }
    return (
        <div className={'container'}>
            <Display type={false}
                     changeMaxValue={changeMaxValue}
                     changeMinValue={changeMinValue}
                     setDisableButSet={setDisableButSet}
                     disableButSet={disableButSet}
                     maxValue={maxValue}
                     minValue={minValue}
                     text={text}
                     changeText={changeText}
            />
            <div className={'wrapper_buttons_count'}>
                <Button disabled={disableButSet}
                        title={'set'}
                        onClick={onClick}/>
            </div>

        </div>
    )
}