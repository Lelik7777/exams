import React, {ChangeEvent} from 'react';

type PropsType = {
    type: string;
    valueInput: number;
    className: string;
    changeValue: (n:number) => void;
}
export const Input = ({
                          type,
                          valueInput,
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
                   value={valueInput}
                   onChange={onChange}
                   className={className}
            />
        </span>

    )
}