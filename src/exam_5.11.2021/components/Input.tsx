import React, {ChangeEvent} from 'react';

type PropsType = {
    type: string;
    value: number;
    maxValue: number;
    minValue: number;
    changeValue: ((v: number) => void) | undefined;
    setDisableButSet: (b: boolean) => void;
    className: string;
    changeText: (b: boolean) => void;
}
export const Input = ({
                          type,
                          value,
                          minValue,
                          maxValue,
                          changeValue,
                          setDisableButSet,
                          className,
                          changeText,
                          ...props
                      }: PropsType) => {


    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (changeValue) {
            changeValue(+e.currentTarget.value);
        }
        changeText(false);
    }
    value >= 0 && minValue < maxValue ? setDisableButSet(false) : setDisableButSet(true);

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