import React, {useState} from 'react';
import {Button} from './Button';
import {DisplayForSet} from './DisplayForSet';
import {ActionType, ValueType} from '../../App';

type PropsType = {
    data: ValueType;
    reducer: (a: ActionType) => void;
}
export const Set = ({data, reducer}: PropsType) => {
    const [disableSet, setDisableSet] = useState(true);
    const onClick = () => {
        setDisableSet(true);
        reducer({type: 'showMessageAndToggle', b: false, b2: false});
    }
    return (
        <div className={'container'}>
            <DisplayForSet
                data={data}
                reducer={reducer}
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