import React, {ChangeEvent} from 'react';

type PropsType = {
    type: string;
    value: number;
    changeValue: ((v: number) => void) | undefined;
    setDisableButSet: (b: boolean) => void;
    className: string;
}
export const Input = ({
                          type,
                          value,
                          changeValue,
                          setDisableButSet,
                          className,
                          ...props
                      }: PropsType) => {
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (changeValue) {
            changeValue(+e.currentTarget.value);
        }
        value >= 0 ? setDisableButSet(false) : setDisableButSet(true);
    };
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