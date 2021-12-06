import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            as="font"
            rel="preload"
            href="/fonts/IBMPlexSans-Bold.ttf"
            crossOrigin="anonymous"
          ></link>
          <link
            as="font"
            rel="preload"
            href="/fonts/IBMPlexSans-Regular.ttf"
            crossOrigin="anonymous"
          ></link>
          <link
            as="font"
            rel="preload"
            href="/fonts/IBMPlexSans-SemiBold.ttf"
            crossOrigin="anonymous"
          ></link>
        </Head>
        <body>
          <Main></Main>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
