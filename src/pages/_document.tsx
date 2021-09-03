import Document, { Html, Head, Main, NextScript } from 'next/document'

// import '../assets/fonts/CascadiaCode.woff2';
// import '../assets/fonts/CascadiaCodeItalic.woff2';
// import '../assets/fonts/CascadiaCodePL.woff2';
// import '../assets/fonts/CascadiaCodePLItalic.woff2';

// import '../assets/fonts/CascadiaMono.woff2';
// import '../assets/fonts/CascadiaMonoItalic.woff2';
// import '../assets/fonts/CascadiaMonoPL.woff2';
// import '../assets/fonts/CascadiaMonoPLItalic.woff2';

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
          />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=Roboto&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument