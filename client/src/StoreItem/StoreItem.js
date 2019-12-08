import React from 'react';
import classes from './StoreItem.module.css';

const StoreItem = ({ imgSrc,varName ,price, currency }) => {
    return (
        <div className={classes.StoreItem}>
            <img
                className={classes.ItemImage}
                src={imgSrc}
                alt='Store Item' />
            <div className={classes.Properties}>
                <div id="name" className={classes.Property + ' ' + classes.wide}>
                    <h5>Name</h5>
                    <div>{varName}</div>
                </div>
                <div id="price" className={classes.Property}>
                    <h5>Price</h5>
                    <div>{price + ' ' + currency}</div>
                </div>
            </div>
        </div>
    );
}

export default StoreItem;