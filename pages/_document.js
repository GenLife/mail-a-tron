import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const {html, head} = renderPage()
    const styles = flush()
    return { html, head, styles }
  }

  render () {
    // TODO: Inject title?
    return (
      <html xmlns='http://www.w3.org/1999/xhtml'>
        <Head>
          <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        </Head>
        <body style={{
          width: '100%',
          margin: 0,
          padding: 0,
          WebkitTextSizeAdjust: '100%',
          MsTextSizeAdjust: '100%'
        }}>
          <Main />
          { process.env.NODE_ENV !== 'production' ? <NextScript /> : null }
        </body>
      </html>
    )
  }
}
