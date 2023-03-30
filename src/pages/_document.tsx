import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { env } from "~/env.mjs";

export default function Document() {
  return (
    <Html style={{ scrollBehavior: "smooth" }}>
      <Head />
      {/* Google Tag */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
          `}
      </Script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
