import React, {useState} from 'react';

type PropsType = {
    type: string;
    minValue?: number;
    maxValue?: number;
    //value?:number;
}
export const Input = ({type, minValue, maxValue, ...props}: PropsType) => {
   const [value,setValue]=useState<number>(0)

    /*const error={
        backgroundColor:'red',
    }*/
    return (
        <span className={'span_input'}>
            <input type={type}
                   value={value}
                   onChange={(e)=>setValue(+e.currentTarget.value)}
            />
        </span>

    )
}