import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.scss';
import { AppPropsWithLayout } from '@/types/page';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page);

    return getLayout(
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;