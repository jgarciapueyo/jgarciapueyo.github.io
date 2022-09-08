import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet" />
        <meta name="description" content="Portfolio and blog of Jorge Garcia Pueyo, a software engineer"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}