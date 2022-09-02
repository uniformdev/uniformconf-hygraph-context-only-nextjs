import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document';
import { enableNextSsr } from '@uniformdev/context-next';
import React from 'react';
import { createUniformContext } from '../lib/uniformContext';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const serverTracker = createUniformContext(ctx);
    enableNextSsr(ctx, serverTracker);
    return await Document.getInitialProps(ctx);
  }

  render(): React.ReactElement {
    let tagManagerSrc = '';
    if (process.env.NEXT_PUBLIC_GA_UA_ID) {
      tagManagerSrc = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_UA_ID}`;
    }

    return (
      <Html lang="en">
        <Head>
          <link href="/favicon/favicon.png" rel="icon" />
          <link href="/favicon/apple-touch-icon.png" rel="apple-touch-icon" />
          <link href="/favicon/apple-touch-icon-72x72.png" rel="apple-touch-icon" sizes="72x72" />
          <link href="/favicon/apple-touch-icon-114x114.png" rel="apple-touch-icon" sizes="114x114" />
          <link href="/favicon/icon-192x192.png" rel="icon" sizes="192x192" />
          <meta name="description" content="UniformConf, a Uniform content demo site" />
        </Head>
        {tagManagerSrc && (
          <>
            <script async src={tagManagerSrc}></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_UA_ID}', {
                  page_path: window.location.pathname,
                });
                `,
              }}
            />
          </>
        )}
        <body className="leading-normal tracking-normal text-white gradient">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
