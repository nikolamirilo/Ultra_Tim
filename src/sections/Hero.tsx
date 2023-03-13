import { HeroProps } from "@/typescript/interfaces/sections";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero: React.FC<HeroProps> = ({ title, subtitle, image }) => {
  return (
    <section id="hero" style={{ backgroundImage: `url(${image})` }}>
      <div className="hero-content">
        <>{title}</>
        <h2>{subtitle}</h2>
        <div className="hero-buttons">
          <Link href="#about">O nama</Link>
          <Link href="#services">Usluge</Link>
        </div>
      </div>
    </section>
  );
};
export default Hero;
