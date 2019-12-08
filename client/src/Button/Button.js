import React from 'react';
import classes from './Button.module.css';

const Button = ({clicked, txtCol, bgCol, children}) => {
    return <button
        type='button'
        onClick={clicked}
        className={classes.Button + ' uppercase shadow'}
        style={{backgroundColor: bgCol, color: txtCol}} >{children}</button>
}

export default Button;