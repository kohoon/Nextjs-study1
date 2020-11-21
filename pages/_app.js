// import 'antd/dist/antd.css'
import '../styles/globals.css'
import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>전체를 감싸는 타이틀</title>
      </Head>
      <Component {...pageProps} />      
    </>
  )
}

export default App
