import React from 'react';
import classes from './ProdTitle.module.css';

const ProdTitle = ({ title }) => {
    const titleCls = [classes.Title, 'uppercase']
    return (
        <div className={classes.Cont}>
            <h2 className={titleCls.join(' ')}>{title}</h2>
        </div>
    );
}

export default ProdTitle;