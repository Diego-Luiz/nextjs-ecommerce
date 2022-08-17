import {
  Html,
  Head, 
  Main, 
  NextScript
} from 'next/document';

const _document = () => {
  return (
    <Html lang='en-us'>
      <Head>
        <body>
          <Main />
          <div id="root-portal"/>
          <NextScript />
        </body>
      </Head>
    </Html>
  )
}

export default _document;
