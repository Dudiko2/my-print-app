import React from 'react';
import classes from './SectionTitle.module.css';

const Title = ({ text }) => {
    return (
        <div className={classes.Cont}>
            <h2 className={classes.Title + ' uppercase'}>{text}</h2>
            <div className={classes.Bottom}></div>
        </div>
    );
}

export default Title;