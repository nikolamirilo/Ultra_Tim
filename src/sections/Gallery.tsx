import Image from "next/image";
import React, { useRef } from "react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../public/images/offer/1.webp";
import img2 from "../../public/images/offer/2.webp";
import img3 from "../../public/images/offer/3.webp";
import img4 from "../../public/images/offer/4.webp";
import img5 from "../../public/images/offer/5.webp";
import img6 from "../../public/images/offer/6.webp";
import img7 from "../../public/images/gallery/7.jpg";
import img8 from "../../public/images/gallery/8.jpg";

const Gallery: React.FC = () => {
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);
  const onAutoplayTimeLeft = (s: unknown, time: number, progress: number) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty("--progress", String(1 - progress));
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };
  const slides = [img8, img7, img6, img5, img4, img3, img2, img1];
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
