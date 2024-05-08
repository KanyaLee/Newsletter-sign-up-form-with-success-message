import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* You can insert any meta tags or link tags here */}
        </Head>
        <body>
          <Main /> {/* This component renders the active page's content */}
          <NextScript /> {/* This component handles all scripts that Next.js needs to function */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
