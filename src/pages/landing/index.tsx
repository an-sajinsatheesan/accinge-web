import React from 'react';
import BaseBody from './landing-start/base';
import Products from './landing-products/products';
import Industries from './landing-industries/industries';
import Digitalization from './landing-digitalization/digitilization';
import Technologies from './landing-technology/technology';


const Landing: React.FC = () => {
    return (
        <>

            <BaseBody />
            <Products/>
            <Technologies/>
            <Industries/>
            <Digitalization/>

        </>

    );
};

export default Landing;