import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Head from "next/head";
import { Header } from "~/components/root/Header.components";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Peter Yoo - Portfolio</title>
        <meta name="description" content="Peter Yoo's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-w-screen flex min-h-screen flex-col bg-[#EFEEED]">
        <Header />
        <div className="mt-[110px] flex flex-grow">
          <Component {...pageProps} />
        </div>
      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
