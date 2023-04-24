import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import { appWithTranslation, useTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import Head from "next/head";
import Image from "next/image";
import wha_image from "public/images/wha-logo.webp";
import { useEffect, useState } from "react";
import ReactWhatsapp from "react-whatsapp";
import "../styles/index.scss";
const App = ({ Component, pageProps }: AppProps) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  });
  const { t } = useTranslation();
  const metaDescription = t("SiteDescription") ? t("SiteDescription") : "";
  return (
    <>
      <Head>
        <title>{t("SiteTitle")}</title>
        <meta name="description" content={metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/images/icons/icon-192x192.png" />
      </Head>
      {loading ? (
        <Loader />
      ) : (
        <body>
          <Navbar />
          <Component {...pageProps} />
          <ReactWhatsapp className="whatsapp-button" number="+381-61-23-00-777" element="webview">
            <Image src={wha_image} alt="Whatsapp" />
          </ReactWhatsapp>
          <Footer />
        </body>
      )}
    </>
  );
};
export default appWithTranslation(App);
