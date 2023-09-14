import Layout from '@/components/layout/layout';
import { NextPageWithLayout } from '@/types/page';
import styles from './about.module.css';
import AboutUs from './about-us';


const About: NextPageWithLayout = () => {
    return <>
        <AboutUs />
    </>
};

About.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};

export default About;