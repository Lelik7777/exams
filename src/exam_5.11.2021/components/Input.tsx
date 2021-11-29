import React, {ChangeEvent} from 'react';

type PropsType = {
    type: string;
    value: number;
    className: string;
    changeValue: (n: number) => void;
    changeDisable: (b: boolean) => void;
    maxValue: number;
    minValue: number;
}
export const Input = ({
                          type,
                          value,
                          className,
                          changeValue,
                          changeDisable,
                          minValue,
                          maxValue,
                          ...props
                      }: PropsType) => {


    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget) {
            changeValue(+e.currentTarget.value);
        }
        changeDisable(false);
        +e.currentTarget.value < 0 && changeDisable(true);
    }
    maxValue <= minValue && changeDisable(true)
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