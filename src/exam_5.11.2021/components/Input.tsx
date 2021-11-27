import React, {ChangeEvent} from 'react';

type PropsType = {
    type: string;
    value: number;
    className: string;
    changeValue: (n: number) => void;
    changeDisable: (b: boolean) => void;
}
export const Input = ({
                          type,
                          value,
                          className,
                          changeValue,
                          changeDisable,
                          ...props
                      }: PropsType) => {


    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        debugger;
        if (e.currentTarget) {
            changeValue(+e.currentTarget.value);
        }
        changeDisable(false);
    }


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