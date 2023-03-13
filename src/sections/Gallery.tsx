import { Carousel } from "@/components";
import type { StaticImageData } from "next/image";
import React, { useState, useEffect } from "react";
import img1 from "../../public/images/gallery/1.jpg";
import img2 from "../../public/images/gallery/2.jpg";
import img3 from "../../public/images/gallery/3.webp";

const Gallery: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [mode, setMode] = useState("automatic");
  const slides = [img1, img2, img3];
  console.log(slides);
  const handlePreviousSlide = () => {
    setMode("manual");
    if (index === 0) {
      setIndex(slides.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  const handleNextSlide = () => {
    setMode("manual");
    if (index === slides.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  console.log(mode);

  useEffect(() => {
    if (mode === "automatic") {
      const interval = setInterval(() => {
        setIndex((prevIndex) => {
          if (prevIndex === slides.length - 1) {
            return 0;
          } else {
            return prevIndex + 1;
          }
        });
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [mode, slides.length]);

  return (
    <section id="gallery">
      <Carousel
        slides={slides}
        index={index}
        handlePreviousSlide={handlePreviousSlide}
        handleNextSlide={handleNextSlide}
      />
    </section>
  );
};

export default Gallery;
