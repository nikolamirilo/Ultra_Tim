import Image from "next/image";
import React from "react";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import img1 from "../../public/images/gallery/1.jpg";

const Carousel: React.FC = () => {
  return (
    <div className="carousel">
      {/* https://www.youtube.com/watch?v=SK9AlIbexOE&ab_channel=MonsterlessonsAcademy */}
      <Image src={img1} alt="Carousel image" fill />
      <div className="left-arrow">
        <IoIosArrowDropleftCircle size={50} color="#f88b06" />
      </div>
      <div className="right-arrow">
        <IoIosArrowDroprightCircle size={50} color="#f88b06" />
      </div>
    </div>
  );
};

export default Carousel;
