import React from 'react';
import classes from './CatTitle.module.css';

const CatTitle = ({ title }) => {
    const titleCls = [classes.Title, 'uppercase']
    return (
        <div className={classes.Cont}>
            <h2 className={titleCls.join(' ')}>{title}</h2>
        </div>
    );
}

export default CatTitle;