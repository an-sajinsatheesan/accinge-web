 import Layout from '@/components/layout/layout';
import { NextPageWithLayout } from '@/types/page';

const About: NextPageWithLayout = () => {
    return <p>This is the About page.</p>;
};

About.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};

export default About;