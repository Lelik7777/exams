import React, {ChangeEvent} from 'react';

type PropsType = {
    type: string;
    changeValue: ((v: number) => void)|undefined;
}
export const Input = ({
                          type,
                          changeValue, ...props
                      }: PropsType) => {
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(changeValue){
            changeValue(+e.currentTarget.value);
        }

    };
    return (
        <span className={'span_input'}>
            <input type={type}
                   onChange={onChange}
            />
        </span>

    )
}