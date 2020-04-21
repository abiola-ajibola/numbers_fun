import React from 'react';

export const Button = ({clicked, text}) => {
    return(
    <button className ='button' onClick ={clicked}>{text}</button>
    )
}