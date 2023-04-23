import Hero from "@/sections/Hero";
import { HomeProps } from "@/typescript/interfaces/pages";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
import Head from "next/head";
import React, { Suspense } from "react";
import background from "../../public/images/hero.jpg";
import data from "../../translationKeys.json";
const Services = dynamic(() => import("@/sections/Services"), { suspense: true });
const About = dynamic(() => import("@/sections/About"), { suspense: true });
const Gallery = dynamic(() => import("@/sections/Gallery"), { suspense: true });

export const getStaticProps = async ({ locale }: HomeProps) => {
  const primaryServices = await data.services.primary;
  const secondaryServices = await data.services.secondary;
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      primaryServices,
      secondaryServices,
    },
  };
};

const Home: React.FC<HomeProps> = ({ primaryServices, secondaryServices }) => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("Ultra Tim")} S</title>
        <meta name="description" content={t("HeroP1")} />
      </Head>
      <main className="home">
        <Hero
          type="home"
          title={
            <h1>
              {t("Ultra Tim")} <span>S</span>
            </h1>
          }
          subtitle={t("HeroP1")}
          image={background.src}
        />
        <Suspense fallback="">
          <About />
        </Suspense>
        <Suspense fallback="">
          <Services data={primaryServices} type="primary" />
        </Suspense>
        <Suspense fallback="">
          <Services data={secondaryServices} type="secondary" />
        </Suspense>
        <Suspense fallback="">
          <Gallery />
        </Suspense>
      </main>
    </>
  );
};
export default Home;
