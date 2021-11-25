import React from 'react';
import {Button} from './Button';
import {Display} from './Display';

type PropsType = {
    changeMaxValue: (v: number) => void;
    changeMinValue: (v: number) => void;
}
export const Set = ({changeMinValue, changeMaxValue}: PropsType) => {

    return (
        <div className={'container'}>
            {/*<DisplayForSet changeMaxValue={changeMaxValue} changeMinValue={changeMinValue}/div>*/}
            <Display type={false} changeMaxValue={changeMaxValue} changeMinValue={changeMinValue}/>
            <div className={'wrapper_buttons_count'}>
                <Button disabled={false} title={'set'} callBack={() => {
                }}/>
            </div>

        </div>
    )
}