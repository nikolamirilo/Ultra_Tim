import { OfferProps } from "@/typescript/interfaces/pages";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import React, { Suspense } from "react";
import img1 from "../../public/images/offer/1.webp";
import img2 from "../../public/images/offer/2.webp";
import img3 from "../../public/images/offer/3.webp";
import img4 from "../../public/images/offer/4.webp";
import img5 from "../../public/images/offer/5.webp";
import img6 from "../../public/images/offer/6.webp";
import data from "../../translationKeys.json";
import dynamic from "next/dynamic";
const OfferCard = dynamic(() => import("@/components/OfferCard"));

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
  const metaDescription = t("HeroP1") ? t("HeroP1") : "";
  return (
    <>
      <Head>
        <title>{t("Ponuda")}</title>
        <meta name="description" content={metaDescription} />
      </Head>
      <main className="offer">
        <div className="offer-cards">
          {data.offers
            ? data.offers.map((item, idx) => {
                return (
                  <Suspense fallback="" key={idx}>
                    <OfferCard
                      type={item.type}
                      title={t(`${item.title}`)}
                      text={t(`${item.text}`)}
                      image={images[idx].src}
                    />
                  </Suspense>
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
