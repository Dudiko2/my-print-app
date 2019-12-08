import React, { useState, useEffect } from 'react';
import Showcase from './Showcase/Showcase';
import Products from './Products/Products';
import Loader from 'react-loader-spinner';
import classes from './Homepage.module.css'

const Home = ({ apiKey }) => {

    const [showcase, setShowcase] = useState(null);
    const [productSection, setProductSection] = useState(null);

    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        // Get random product to appear in <Showcase/>
        fetch('/api/store/products', {
            headers: {
                Authorization : apiKey,
            }
        })
        .then(res => res.json())
        .then(j => {
            const rand = Math.floor(Math.random() * j.result.length);
            const newItem = { name: j.result[rand].name, showcasedImg: j.result[rand].thumbnail_url, id: j.result[rand].id };

            setShowcase(newItem);
        });
    }, [apiKey]);
    
    useEffect(() => {
        // Get up to 3 products to show in <Products/>
        fetch('/api/store/products?limit=3', {
            headers: {
                Authorization: apiKey
            }
        })
        .then(res => res.json())
        .then(j => {
            let prodsArr = j.result;

            setProductSection(prodsArr);
        });
    }, [apiKey]);

    useEffect(() => {
        if (showcase && productSection && isLoading) setIsLoading(false);
    }, [showcase, productSection, isLoading]);

    let page = <Loader type='Oval' color='var(--dom)' />;
    if(!isLoading) {
        page = (
            <>
            <Showcase
            imgSrc={showcase.showcasedImg}
            itemName={showcase.name}
            itemId={showcase.id} />
            <Products prods={productSection} />
            </>
        );
    }

    return (
        <div className={classes.Home}>
            {page}
        </div>
    );
}

export default Home;