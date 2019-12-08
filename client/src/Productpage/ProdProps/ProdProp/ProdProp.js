import React from 'react';
import classes from './ProdProp.module.css';

const Prop = ({ propName, propValue }) => {
    return (
        <div className={classes.Prop}>
            <h4 className={classes.Title + ' uppercase'}>{propName}</h4>
            <p className={classes.Value}>{propValue}</p>
        </div>
    );
}

export default Prop;