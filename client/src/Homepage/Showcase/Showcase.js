import React from 'react';
import classes from './Showcase.module.css';
import Button from '../../Button/Button';
import { Link } from 'react-router-dom';
import Aux from '../../Auxiliary/Auxiliary';
import FeaturedImg from '../../FeaturedImg/FeaturedImg';

const Showcase = ({ imgSrc, itemName, itemId }) => {

    return (
        <div className={classes.Showcase}>
            <Aux>
                <FeaturedImg
                    imgCls={classes.imgCls}
                    imgSrc={imgSrc}
                    imgName={itemName}
                    width='60%' />
                <div className={classes.prodBlock}>
                    <h2>{itemName}</h2>
                    <p className={classes.Text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius harum omnis eligendi? Voluptas, deleniti!</p>
                    <Link
                        to={`/products/${itemId}`} >
                        <Button>Get this item</Button>
                    </Link>
                </div>
            </Aux>
        </div>
    );
}

export default Showcase;