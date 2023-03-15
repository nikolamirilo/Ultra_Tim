import { OfferProps } from "@/typescript/interfaces/pages";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import React from "react";

export const getStaticProps = async ({ locale }: OfferProps) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

const Offer: React.FC<OfferProps> = () => {
  return (
    <>
      <Head>
        <title>Offer</title>
      </Head>
      <main className="offer">
        <h1>Offer</h1>
      </main>
      ;
    </>
  );
};

export default Offer;
