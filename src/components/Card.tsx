import { CardProps } from "@/typescript/interfaces/components";
import { useRouter } from "next/navigation";
import React from "react";

const Card: React.FC<CardProps> = ({ title, subtitle }) => {
  const router = useRouter();
  return (
    <div className="card">
      <div className="card-text">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};
export default Card;
