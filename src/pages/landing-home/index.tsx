import React from 'react';
import BaseBody from './landing-start/base';
import Products from './landing-products/products';
// import './landing.scss'

const HomeBody: React.FC = () => {
    return (
        <>

            <BaseBody />
            <Products/>

        </>

    );
};

export default HomeBody;