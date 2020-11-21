import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
            <link
                href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
                rel="stylesheet"
            />
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.8.4/antd.min.css"
                integrity="sha512-v/0IEY/Jzka51BbTu1+BMM96C7Wmu+Xy8lmskl78mfjuJl3Qd049m9/W0x7whUlnkctEnia6XHC6lR/lzEcfog=="
                crossOrigin="anonymous"
            />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument