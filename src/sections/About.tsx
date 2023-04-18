import { useTranslation } from "next-i18next";
import Image from "next/image";
import React from "react";
import BW from "../../public/images/BW.webp";

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="about">
      <div className="content">
        <p>{t("AboutUsText")}</p>
      </div>
      <div className="image">
        <Image src={BW} alt="Belgrade" />
      </div>
    </section>
  );
};

export default About;
