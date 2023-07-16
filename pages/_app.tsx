import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode, Suspense } from "react";
import { NextPage } from "next";
import SearchWordProvider from "@/context/searchWordContext";
import { ThemeProvider } from "@material-tailwind/react";
import { SessionProvider } from "next-auth/react"

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp(
  { Component, pageProps }: AppPropsWithLayout,
) {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);
  return (
    <main className="min-h-screen bg-gray-200">
      <ThemeProvider>
        <SessionProvider>
          <SearchWordProvider>
            {getLayout(<Component {...pageProps} />)}
          </SearchWordProvider>
        </SessionProvider>
      </ThemeProvider>
    </main>
  );
}
