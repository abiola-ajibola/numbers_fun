import React from 'react';

export const NumberInput = ({changedNumber}) => {
    return(
    <input className='input' type='number' placeholder='Enter a whole number' min={0} onInput={changedNumber}></input>
    )
}