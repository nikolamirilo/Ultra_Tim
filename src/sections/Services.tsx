import { ServicesProps } from "@/typescript/interfaces/sections";
import React from "react";

const Services: React.FC<ServicesProps> = ({ data }) => {
  const images = [
    "/images/projects/swapabee.webp",
    "/images/projects/webuyindubai.webp",
    "/images/projects/ariosoinvestment.webp",
    "/images/projects/reactifysolutions.webp",
  ];
  return (
    <section id="services">
      <h1>Services</h1>
      {/* <div className="cards-container">
        {data
          ? data.map((services, idx) => {
              return (
                <Card
                  key={idx}
                  title={project.title}
                  image={images[idx]}
                  subtitle="This is my project, I worked on this project"
                />
              );
            })
          : null}
      </div> */}
    </section>
  );
};

export default Services;
