import Layout from '@/components/layout/layout';
import { NextPageWithLayout } from '@/types/page';
import Landing from './landing';

const Home: NextPageWithLayout = () => {
    return <><Landing/></>;
};

Home.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};

export default Home;