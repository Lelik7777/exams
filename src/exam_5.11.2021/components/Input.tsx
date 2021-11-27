import React, {ChangeEvent} from 'react';

type PropsType = {
    type: string;
    value: number;
    className: string;
    changeValue: (n:number) => void;
}
export const Input = ({
                          type,
                          value,
                          className,
                          changeValue,
                          ...props
                      }: PropsType) => {


    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (changeValue) {
            changeValue(+e.currentTarget.value);
        }
    }
   // value >= 0 && minValue < maxValue ? setDisableButSet(false) : setDisableButSet(true);

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