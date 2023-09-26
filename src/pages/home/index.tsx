import React, { useEffect, useState } from 'react';
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
import Company from './landing-company/company';
import ProminentFeilds from './landing-feilds/feilds';
import IndustryList from './../../shared/json/data.json'


const Landing: NextPageWithLayout = () => {
    const [List, setIndustryList] = useState<any>(IndustryList.industries);

 useEffect(() => {
    document.title = 'Accinge Technologies | Solution For Your Every IT Bussiness';
}, []);

    return (
        <>

            <BaseBody />
            <TrustedBrands />
            <Company />
            <Products />
            <Technologies />
            <ClientFeedback />
            <ProminentFeilds />
            <Industries isShowHeading={true} IndustryList={List} />
            <Digitalization isShowHeading={true} />
            <ConatactUs />

        </>

    );
};

Landing.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};

export default Landing;