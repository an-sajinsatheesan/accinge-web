import Layout from '@/components/layout/layout';
import { NextPageWithLayout } from '@/types/page';
 import styles from './about.module.css';


const About: NextPageWithLayout = () => {
    return <>
        <div className='h-80 w-100'>
            <div className={styles.about}></div>
        </div>
    </>
};

About.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};

export default About;