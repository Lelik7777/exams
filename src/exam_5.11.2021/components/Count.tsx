import React from 'react';
import {Button} from './Button';
import {Display} from './Display';
import {ActionType, ValueType} from '../../App';

type PropsType = {
    data: ValueType;
    dispatch: (a: ActionType) => void;
}
export const Count = ({data, dispatch}: PropsType) => {

    const onClick = () => dispatch({type: 'setInitialValue', num: data.min});

    const changeCount = () => dispatch({type: 'changeCount'});

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
                        disabled={!(data.min >= 0 && data.count > data.min)}
                        onClick={onClick}
                />
            </div>

        </div>
    )
}

