import React from 'react';
import BaseBody from './landing-start/base';
import Products from './landing-products/products';
import Industries from './landing-industries/industries';
import Digitalization from './landing-digitalization/digitilization';
import Technologies from './landing-technology/technology';
import TrustedBrands from './landing-trusted-clients';
import ClientFeedback from './landing-client-feedback/clientFeedback';
import ConatactUs from './landing-contact-us/ContactUs';


const Landing: React.FC = () => {
    return (
        <>

            <BaseBody />
            <TrustedBrands/>
            <Products/>
            <Technologies/>
            <ClientFeedback/>
            <Industries isShowHeading={true}/>
            <Digitalization/>
            <ConatactUs/>

        </>

    );
};

export default Landing;