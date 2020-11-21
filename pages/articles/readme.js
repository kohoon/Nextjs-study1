import Link from 'next/link';
import Head from 'next/head';

function ReadMe(props) {
    return (
        <div>
            <Head>
                <title>Read Me</title>
            </Head>
            <h1>ReadMe</h1>
            <ul>
                <Link href="/articles" >
                    <a>&lt; Back to List</a>
                </Link>
            </ul>
        </div>
    )
}

export default ReadMe;