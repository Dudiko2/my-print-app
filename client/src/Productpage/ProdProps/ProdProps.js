import React, { useState, useEffect } from 'react';
import Prop from './ProdProp/ProdProp';
import classes from './ProdProps.module.css';

const ProdProps = ({ variant }) => {
    const [propsObj, setPropsObj] = useState({});
    const [displayProps, setDisplayProps] = useState([]);

    useEffect(() => {
        if (variant !== undefined) {
            setPropsObj({
                name: variant.name,
                price: `${variant.retail_price} ${variant.currency}`,
            })
        }
    }, [variant]);

    useEffect(() => {
        const propsArr = [];
        for (let p in propsObj) {
            propsArr.push(<Prop propName={p} propValue={propsObj[p]} key={`${p} prop`} />);
        }

        setDisplayProps(propsArr);
    }, [propsObj]);
    
    return (
        <div className={classes.Props}>
            {displayProps}
        </div>
    );
}

export default ProdProps;