import React from 'react';

export const DateInput = ({changedDate}) => {
    return(
    <input className='input' type='date' placeholder='Pick a date' onChange={changedDate}></input>
    )
}