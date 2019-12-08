import React from 'react';
import classes from './Backdrop.module.css';

const Backdrop = ({ show, children }) => {
    let clsArr = [classes.Backdrop];

    if (show === true) {
        clsArr.push(classes.Show);
    }

    return (
        <div className={clsArr.join(' ')}>{children}</div>
    )
}

export default Backdrop;