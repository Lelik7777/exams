import React, {ChangeEvent} from 'react';

type PropsType = {
    type: string;
    value: number;
    className: string;
    changeValue: (n: number) => void;
    setDisableSet: (b: boolean) => void;
    maxValue: number;
    minValue: number;
}
export const Input = ({
                          type,
                          value,
                          className,
                          changeValue,
                          setDisableSet,
                          minValue,
                          maxValue,
                      }: PropsType) => {


    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget) {
            changeValue(+e.currentTarget.value);
        }
        setDisableSet(false);
        +e.currentTarget.value < 0 && setDisableSet(true);
    }
    maxValue <= minValue && setDisableSet(true)
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