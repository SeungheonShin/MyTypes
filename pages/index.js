import Head from 'next/head'
import SentenceCard from '../components/SentenceCard'

const IndexPage = () => {
    return(
        <div>
            <Head>
                <title>My Types</title>
            </Head>
            <div>
                <h2 style={{textAlign : 'center', marginTop : '50px'}}>My Types</h2>
            </div>
            <SentenceCard/>
        </div>
    );
}

export default IndexPage;