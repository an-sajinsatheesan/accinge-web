import React from 'react';
import BaseBody from './landing-start/base';
import Products from './landing-products/products';
import Industries from './landing-industries/industries';
import Digitalization from './landing-digitalization/digitilization';
import Technologies from './landing-technology/technology';
import TrustedBrands from './landing-trusted-clients';
import ClientFeedback from './landing-client-feedback/clientFeedback';
import ConatactUs from './landing-contact-us/ContactUs';
import { NextPageWithLayout } from '@/types/page';
import Layout from '@/components/layout/layout';


const Landing: NextPageWithLayout = () => {
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

Landing.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};

export default Landing;