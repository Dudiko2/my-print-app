import React from 'react';
import CatTitle from './CatTitle/CatTitle';
import classes from './Category.module.css';

const Category = ({ imgSrc, imgName }) => {
    return (
        <div className={classes.Category}>
            <img src={imgSrc} alt={imgName} className={classes.Image}/>
            <CatTitle title='blank' />
        </div>
    );
}

export default Category;