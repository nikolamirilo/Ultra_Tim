import { Carousel } from "@/components";
import React, { useState } from "react";

const Gallery: React.FC = () => {
  const [index, setIndex] = useState();
  return (
    <section id="gallery">
      <Carousel />
    </section>
  );
};

export default Gallery;
