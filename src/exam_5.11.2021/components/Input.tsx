import React, {ChangeEvent, useEffect} from 'react';
import {ValueType} from '../../App';

type PropsType = {
    data: ValueType;
    type: string;
    value: number;
    className: string;
    changeValue: (n: number) => void;
    setDisableSet: (b: boolean) => void;
}
export const Input = ({
                          type,
                          value,
                          className,
                          changeValue,
                          setDisableSet,
                          data,
                      }: PropsType) => {


    const onChange = (e: ChangeEvent<HTMLInputElement>) => {

        const valueInput = e.currentTarget.valueAsNumber;
        if (e.currentTarget) {
            changeValue(valueInput);
        }
        setDisableSet(false);
        valueInput < 0 && setDisableSet(true);
    }

    useEffect(() => {
        data.max <= data.min && setDisableSet(true)
    }, [])


    return (
        <span className={'span_input'}>
            <input type={type}
                   value={value}
                   onChange={onChange}
                   className={className}
            />
        </span>

    )
}