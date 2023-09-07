import React from 'react';
import BaseBody from './landing-start/base';
import Products from './landing-products/products';
import Industries from './landing-industries.tsx/industries';


const Landing: React.FC = () => {
    return (
        <>

            <BaseBody />
            <Products/>
            <Industries/>

        </>

    );
};

export default Landing;