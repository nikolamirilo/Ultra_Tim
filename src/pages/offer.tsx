import { OfferProps } from "@/typescript/interfaces/pages";
import Head from "next/head";
import React from "react";

const Offer: React.FC<OfferProps> = () => {
  return (
    <>
      <Head>
        <title>Offer</title>
      </Head>
      <main className="offer">Offer</main>;
    </>
  );
};

export default Offer;
