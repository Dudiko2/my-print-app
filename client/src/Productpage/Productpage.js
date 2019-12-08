import React, {  useState, useEffect } from 'react';
import Aux from '../Auxiliary/Auxiliary';
import FeaturedImg from '../FeaturedImg/FeaturedImg';
import classes from './Productpage.module.css';
import { useParams } from 'react-router-dom';
import NavArrow from '../NavArrow/NavArrow';
import Button from '../Button/Button';
import ProdProps from './ProdProps/ProdProps';

const ProductPage = ({ apiKey }) => {
    let { id } = useParams(); // the 'param' comes from the url

    const [variants, setVariants] = useState([]);

    useEffect(() => {
        fetch(`/api/store/products/${id}`, {
            headers: {
                Authorization : `${apiKey}`
            }
        }).then(res => res.json())
        .then(j => {
            setVariants(j.result.sync_variants);
        });

    }, [id, apiKey]);

    const [showcasedVar, setShowcasedVar] = useState(0);

    const handleArrowClick = (move) => {
        let moveAdded = showcasedVar + move;
        let next;
        if (moveAdded < 0) {
            moveAdded *= -1;
            next = parseInt((variants.length - 1) / moveAdded);
        } else {
            next = moveAdded % variants.length;
        }
        setShowcasedVar(next);
    }

    return (
        <Aux>
            <div className={classes.Container + ' shadow'}>
                <div className={classes.Nav}>
                    <NavArrow width='4%' direction='left' clicked={() => handleArrowClick(-1)} />
                    <FeaturedImg
                        imgCls={classes.imgCls}
                        imgSrc={variants[showcasedVar] !== undefined ?
                            variants[showcasedVar].files[1].preview_url
                            : ''}
                        imgName={id}
                        width='60%' />
                    <NavArrow width='4%' direction='right' clicked={() => handleArrowClick(1)} />
                </div>
                <div className={classes.varNum}>{`${showcasedVar + 1}/${variants.length}`}</div>
            </div>

            <ProdProps variant={variants[showcasedVar]} />

            <div className={classes.AtcCont}>
                <Button bgCol='var(--dom)' txtCol='white' >Add to cart</Button>
            </div>
        </Aux>
    )
}

export default ProductPage;