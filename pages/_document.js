import Document, { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default class _Document extends Document {

    render() {
        return (
            <Html>
                <Head >
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap" rel="stylesheet" />
                    {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
                    <Script
                        src="https://www.googletagmanager.com/gtag/js?id=G-VPNSWW4DDQ"
                        strategy="afterInteractive" />

                    <Script id="google-analytics" strategy="afterInteractive">
                        {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-VPNSWW4DDQ',{ page_path: window.location.pathname });
                        `}
                    </Script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}