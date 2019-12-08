import React from 'react';
import Section from '../../wrapper/Section/Section';
import Category from './Category/Category';

const Categories = () => {
    return (
    <Section sectTitle='Categories'>
        <Category imgSrc='http://www.politicalmetaphors.com/wp-content/uploads/2015/04/blog-shapes-square-windows.jpg' imgName='img' />
        <Category imgSrc='http://www.politicalmetaphors.com/wp-content/uploads/2015/04/blog-shapes-square-windows.jpg' imgName='img' />
        <Category imgSrc='http://www.politicalmetaphors.com/wp-content/uploads/2015/04/blog-shapes-square-windows.jpg' imgName='img' />
    </Section>
    );
}

export default Categories;