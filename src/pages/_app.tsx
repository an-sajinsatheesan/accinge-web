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
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <meta name="description" content="Accinge provides software solutions as well as bespoke software development services for corporate establishments and government sectors in UAE and EMEA region." />
                <meta content='width=device-width, initial-scale=1, user-scalable=1, minimum-scale=1, maximum-scale=5' name='viewport' />
                <meta name="keywords" content="Accinge,software solutions, software development services, corporate establishments, government sectors, UAE , EMEA region, Human Resource Management," />
                <meta name="title" content="Accinge Technologies | Solution For Your Every IT Bussiness" />
                <meta name="og:title" content="Accinge Technologies | Solution For Your Every IT Bussiness" />
                <meta name="og:description" content="Accinge provides software solutions as well as bespoke software development services for corporate establishments and government sectors in UAE and EMEA region." />
                <meta property="og:url" content="https://accingeapps.com/" />
                <meta name="twitter:title" content="Accinge Technologies" />
                <meta name="twitter:description" content="Accinge provides software solutions as well as bespoke software development services for corporate establishments and government sectors in UAE and EMEA region." />
                <meta name="twitter:image" content="https://example.com/image.jpg" />
                <meta name="google-site-verification" content="2aqt3wFuSpp1c_O_-7Su7CvKHK4gOIqNeWG3y6NE6cg" />
                <meta name="twitter:card" content="Accinge provides software solutions as well as bespoke software development services for corporate establishments and government sectors in UAE and EMEA region." />
            </Head>


            <main className={poppins.className}>
                <Component {...pageProps} />
            </main>
        </>
    );
}

export default MyApp;