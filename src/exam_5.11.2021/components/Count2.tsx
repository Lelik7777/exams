import React from 'react';
import {Button} from './Button';
import {Display} from './Display';
import {ActionType, ValueType} from '../../App';

type PropsType = {
    data: ValueType;
    reduce: (a: ActionType) => void;
}
export const Count2 = ({data, reduce}: PropsType) => {

    const onClickReset = () => reduce({type: 'setInitialValue', num: data.min});
    const onClickSet = () => reduce({type: 'showMessageAndToggle', message: false, toggle: true});
    const changeCount = () => reduce({type: 'changeCount'});

    return (
        <div className={'container'}>
            <Display
                data={data}
            />
            <div className={'wrapper_buttons_count'}>
                <Button title={'inc'}
                        disabled={data.count === data.max || data.message}
                        onClick={changeCount}
                />
                <Button title={'reset'}
                        disabled={data.min <= 0 && data.count < data.min}
                        onClick={onClickReset}
                />
                <Button disabled={false} title={'set'} onClick={onClickSet}/>
            </div>

        </div>
    )
}

