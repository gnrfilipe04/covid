import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'


export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }

    render() {
        return (
            <Html lang="pt-br">
                <Head>
                    <meta charSet="utf-8" />
                    <link rel="icon" href="favicon.ico" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="theme-color" content="#000000" />
                    <meta name="description" content="API Nasa" />
                    <meta name="keywords" content="App para consumir API da NASA"/>
                    <meta name="robots" content="index, nofollow"></meta>
                    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
                

                    {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-0NYBD2BTVE" /> */}
                    {/* <script
                        dangerouslySetInnerHTML={{
                        __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments)}
                                gtag('js', new Date());
                                gtag('config', 'G-0NYBD2BTVE');`
                        }}
                    /> */}


                    <title>API | Nasa</title>

                </Head>
                <body>
                    <Main />
                    <NextScript />
                
                </body>
            </Html >
        )
    }
}