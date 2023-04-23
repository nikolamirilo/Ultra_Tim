import { ContactProps } from "@/typescript/interfaces/pages";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
import Head from "next/head";
import React, { Suspense } from "react";
const Form = dynamic(() => import("@/components/Form"), { suspense: true });
const Map = dynamic(() => import("@/components/Map"), { suspense: true });

export const getStaticProps = async ({ locale }: ContactProps) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

const Contact: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("Kontakt")}</title>
        <meta name="description" content={t("HeroP1")} />
      </Head>
      <main className="contact">
        <Suspense fallback="">
          <Form />
        </Suspense>
        <Suspense fallback="">
          <Map />
        </Suspense>
      </main>
    </>
  );
};
export default Contact;
