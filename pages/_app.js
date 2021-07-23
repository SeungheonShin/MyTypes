import Head from 'next/head';
import '../public/css/default.css'

const MyApp = ({Component, pageProps}) => {
    return(
        
        <Component {...pageProps}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
        </Component>
    );
}


export default MyApp;
