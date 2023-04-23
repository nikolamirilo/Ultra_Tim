import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import { appWithTranslation, useTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";
import "../styles/index.scss";

const App = ({ Component, pageProps }: AppProps) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  });
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("Ultra Tim S")}</title>
        <meta name="description" content={t("HeroP1")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/images/icons/icon-192x192.png" />
      </Head>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </>
      )}
    </>
  );
};
export default appWithTranslation(App);
