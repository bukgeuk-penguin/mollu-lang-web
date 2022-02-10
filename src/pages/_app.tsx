import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script
          async
          defer
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEB_ID}
          src={process.env.NEXT_PUBLIC_UMAMI_SRC}
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
