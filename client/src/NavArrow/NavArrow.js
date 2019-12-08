import React from 'react';
import classes from './NavArrow.module.css';

const NavArrow = ({ width, height, direction, clicked }) => {
    const clsArr = [classes.Arrow];

    switch(direction) {
        case 'left':
            clsArr.push(classes.Left);
            break;
        case 'up':
            clsArr.push(classes.Up);
            break;
        case 'down':
            clsArr.push(classes.Down);
            break;
        default:
            ;
    }

    const clsStr = clsArr.join(' ');

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width} height={height}
            viewBox="0 0 13 20"
            onClick={clicked}
            className={clsStr}>
            <path d="M0,0H0V5l6.5,5L0,15v5L13,10,0,0Z" />
        </svg>

    )
}

export default NavArrow;