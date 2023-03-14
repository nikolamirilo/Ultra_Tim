import { HeroProps } from "@/typescript/interfaces/sections";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "next-i18next";

const Hero: React.FC<HeroProps> = ({ type, title, subtitle, image }) => {
  const { t } = useTranslation();
  return (
    <section id="hero">
      <Image src={image} alt="Transport" fill objectFit="cover" />
      <div className="hero-content">
        <>{title}</>
        <h2>{subtitle}</h2>
        {type === "home" ? (
          <div className="hero-buttons">
            <Link href="#about">{t("O nama")}</Link>
            <Link href="#services">{t("Usluge")}</Link>
          </div>
        ) : null}
      </div>
    </section>
  );
};
export default Hero;
