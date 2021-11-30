import React, {useState} from 'react';
import {Button} from './Button';
import {DisplayForSet} from './DisplayForSet';
import {ActionType, ValueType} from '../../App';

type PropsType = {
    data: ValueType;
    reduce: (a: ActionType) => void;
}
export const Set = ({data, reduce}: PropsType) => {
    const [disableSet, setDisableSet] = useState(true);
    const onClick = () => {
        setDisableSet(true);
        reduce({type: 'showMessageAndToggle', message: false, toggle: false});
    }
    return (
        <div className={'container'}>
            <DisplayForSet
                data={data}
                reduce={reduce}
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