import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import Head from "next/head";
import { IsWorkProvider } from "~/contexts/IsWorkContext";
import { ThemeProvider } from "next-themes";
import Script from "next/script";
import { env } from "~/env.mjs";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class">
        <IsWorkProvider>
          <Head>
            <title>Peter Yoo - Portfolio</title>
            <meta name="description" content="Peter Yoo's Portfolio" />
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/apple-touch-icon.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/favicon-16x16.png"
            />
            <link rel="manifest" href="/site.webmanifest" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />
          </Head>
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
          <div
            className={`min-w-screen flex min-h-screen flex-col ${inter.variable} font-inter`}
          >
            <div className="mt-[110px] flex flex-grow">
              <Component {...pageProps} />
            </div>
          </div>
        </IsWorkProvider>
      </ThemeProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
