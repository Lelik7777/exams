import React from 'react';
import {Button} from './Button';
import {Display} from './Display';
import {ActionType, ValueType} from '../../App';

type PropsType = {
    data: ValueType;
    reducer: (a: ActionType) => void;
}
export const Count = ({data, reducer}: PropsType) => {

    const onClick = () => reducer({type: 'setInitialValue', n: data.min});

    const changeCount = () => reducer({type: 'changeCount'});

    return (
        <div className={'container'}>
            <Display
                data={data}
            />
            <div className={'wrapper_buttons_count'}>
                <Button title={'inc'}
                        disabled={data.count === data.max || data.message ? true : false}
                        onClick={changeCount}
                />
                <Button title={'reset'}
                        disabled={(data.min >= 0 && data.count > data.min) ? false : true}
                        onClick={onClick}
                />
            </div>

        </div>
    )
}

