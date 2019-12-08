import React from 'react';
import Section from '../../wrapper/Section/Section';
import Product from './Product/Product';

const Products = ({ prods }) => {

    let showProds = prods ? (prods.map(p => <Product imgSrc={p.thumbnail_url} imgName={p.name} key={p.id} />)) : null;
    
    return (
    <Section sectTitle='Products'>
        {showProds}
    </Section>
    );
}

export default Products;