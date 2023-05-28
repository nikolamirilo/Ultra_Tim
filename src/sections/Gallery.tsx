import Image from "next/image";
import React, { useRef } from "react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../public/images/gallery/1.jpg";
import img2 from "../../public/images/gallery/2.jpg";
import img3 from "../../public/images/gallery/3.jpg";
import img4 from "../../public/images/gallery/4.jpg";
import img5 from "../../public/images/gallery/5.jpg";
import img6 from "../../public/images/gallery/6.jpg";
import img7 from "../../public/images/gallery/7.jpg";

const Gallery: React.FC = () => {
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);
  const onAutoplayTimeLeft = (s: unknown, time: number, progress: number) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty("--progress", String(1 - progress));
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };
  const slides = [img1, img2, img3, img4, img5, img6, img7];
  return (
    <section id="gallery">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        zoom={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        effect={"fade"}
        grabCursor={true}
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="swiper"
      >
        {slides?.map((image, idx) => {
          return (
            <SwiperSlide key={idx}>
              <Image src={image} alt="Slide Image" fill />
            </SwiperSlide>
          );
        })}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </section>
  );
};
export default Gallery;
