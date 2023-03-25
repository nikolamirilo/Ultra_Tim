import OfferCard from "@/components/OfferCard";
import { OfferProps } from "@/typescript/interfaces/pages";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import React from "react";
import img1 from "../../public/images/offer/1.jpeg";
import img2 from "../../public/images/offer/2.jpg";
import img3 from "../../public/images/offer/3.jpg";
import img4 from "../../public/images/offer/4.jpg";
import img5 from "../../public/images/offer/5.jpg";
import img6 from "../../public/images/offer/6.jpg";
import data from "../../translationKeys.json";

export const getStaticProps = async ({ locale }: OfferProps) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

const Offer: React.FC<OfferProps> = () => {
  const { t } = useTranslation();
  const images = [img1, img2, img3, img4, img5, img6];
  return (
    <>
      <Head>
        <title>{t("Ponuda")}</title>
      </Head>
      <main className="offer">
        <div className="offer-cards">
          {data.offers
            ? data.offers.map((item, idx) => {
                return (
                  <OfferCard
                    key={idx}
                    type={item.type}
                    title={t(`${item.title}`)}
                    text={t(`${item.text}`)}
                    image={images[idx].src}
                  />
                );
              })
            : null}
        </div>
      </main>
      ;
    </>
  );
};

export default Offer;
