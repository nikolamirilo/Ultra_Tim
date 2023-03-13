import { CardProps } from "@/typescript/interfaces/components";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Card: React.FC<CardProps> = ({ title, subtitle, image }) => {
  const router = useRouter();
  return (
    <div className="card">
      <div className="card-image">
        <Image src={image} alt={title} width={360} height={210} />
      </div>
      <div className="card-text">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};
export default Card;
