import { ServicesProps } from "@/typescript/interfaces/sections";
import React from "react";
import Card from "./../components/Card";

const Services: React.FC<ServicesProps> = ({ data, type }) => {
  const images = [];
  return (
    <section id="services">
      {type === "primary" ? (
        <h1>Primary Services</h1>
      ) : type === "secondary" ? (
        <h1>Secondary Services</h1>
      ) : null}
      <div className="cards-container">
        {data
          ? data.map((item, idx) => {
              return <Card key={idx} title={item.title} subtitle={item.subtitle} />;
            })
          : null}
      </div>
    </section>
  );
};

export default Services;
