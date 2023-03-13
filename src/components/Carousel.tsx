import { CarouselProps } from "@/typescript/interfaces/components";
import Image from "next/image";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Carousel: React.FC<CarouselProps> = ({ index, slides, handleNextSlide, handlePreviousSlide }) => {
  return (
    <div className="carousel" style={{ backgroundImage: `url(${slides[index].src as string})` }}>
      <button className="left-arrow" onClick={handlePreviousSlide}>
        <IoIosArrowBack size={60} className="arrow-icon" />
      </button>
      <button className="right-arrow" onClick={handleNextSlide}>
        <IoIosArrowForward size={60} className="arrow-icon" />
      </button>
    </div>
  );
};

export default Carousel;
