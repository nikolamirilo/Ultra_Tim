import { HeroProps } from "@/typescript/interfaces/sections";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero: React.FC<HeroProps> = ({ title, subtitle, image }) => {
  const blurDataURL =
    "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgd2lkdGg9IjEyOCIgaGVpZ2h0PSIxMjgiIHZlcnNpb249IjEuMSI+PHBhdGggZD0iTTAgMGgxMjh2MTI4SDB6IiBmaWxsPSIjMDAxZjNmIiAvPjwvc3ZnPg==";
  return (
    <section id="hero">
      <Image src={image} alt="Office" fill placeholder="blur" blurDataURL={blurDataURL} priority />
      <div className="hero-content">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <div className="hero-buttons">
          <Link href="#portfolio">Portfolio</Link>
          <Link href="#timeline">Timeline</Link>
        </div>
      </div>
    </section>
  );
};
export default Hero;
