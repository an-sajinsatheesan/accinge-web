import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.css'
import { AppPropsWithLayout } from '@/types/page';
import '@/styles/globals.scss'
import { Poppins } from 'next/font/google'
const poppins = Poppins({
    subsets: ['latin'],
    weight: "400",
    style: "normal"
})



function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page);

    return getLayout(
        <>
            <Head>
                <title>Accinge Technologies</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Accinge provides software solutions as well as bespoke software development services for corporate establishments and government sectors in UAE and EMEA region."/>
            </Head>
            <main className={poppins.className}>
                <Component {...pageProps} />
            </main>
        </>
    );
}

export default MyApp;