import React from 'react';
import ProdTitle from './ProdTitle/ProdTitle';
import classes from './Product.module.css';

const Product = ({ imgSrc, imgName }) => {
    return (
        <div className={classes.Product}>
            <img
                src={imgSrc}
                alt={imgName}
                className={classes.Image}/>
            <ProdTitle title={imgName} />
        </div>
    );
}

export default Product;