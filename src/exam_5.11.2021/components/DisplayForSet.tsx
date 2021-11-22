import React from 'react';
import {Span} from './Span';
import {Input} from './Input';

export const DisplayForSet = () => {
    return (
        <div className={'display display_set'}>
            <div className={'block_dis_set'}>
                <Span title={'max value'}/>
                <Input type={'number'} />
            </div>
            <div className={'block_dis_set'}>
                <Span title={'start value'}/>
                <Input type={'number'} />
            </div>
        </div>
    )
}