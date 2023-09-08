import React from 'react';
import BaseBody from './landing-start/base';
import Products from './landing-products/products';
import Industries from './landing-industries/industries';
import Digitalization from './landing-digitalization/digitilization';


const Landing: React.FC = () => {
    return (
        <>

            <BaseBody />
            <Products/>
            <Industries/>
            <Digitalization/>

        </>

    );
};

export default Landing;