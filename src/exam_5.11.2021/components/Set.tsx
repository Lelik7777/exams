import React from 'react';
import {DisplayForSet} from './DisplayForSet';
import {Button} from './Button';

export const Set = () => {

    return (
        <div className={'container'}>
            <DisplayForSet/>
            <div className={'wrapper_buttons_count'}>
                <Button disabled={true} title={'set'} callBack={() => {
                }}/>
            </div>

        </div>
    )
}