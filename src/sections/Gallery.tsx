import React, { useRef } from "react";
// Import Swiper React components
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from "../../public/images/gallery/1.jpg";
import img2 from "../../public/images/gallery/2.jpg";
import img3 from "../../public/images/gallery/3.webp";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";

const Gallery: React.FC = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  const slides = [img1, img2, img3];
  return (
    <section id="gallery">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
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

// import React, { useEffect, useState } from "react";
// import img1 from "../../public/images/gallery/1.jpg";
// import img2 from "../../public/images/gallery/2.jpg";
// import img3 from "../../public/images/gallery/3.webp";

// const Gallery: React.FC = () => {
//   const [index, setIndex] = useState(0);
//   const [mode, setMode] = useState("automatic");
//    const slides = [img1, img2, img3];
//   const handlePreviousSlide = () => {
//     setMode("manual");
//     if (index === 0) {
//       setIndex(slides.length - 1);
//     } else {
//       setIndex(index - 1);
//     }
//   };
//   const handleNextSlide = () => {
//     setMode("manual");
//     if (index === slides.length - 1) {
//       setIndex(0);
//     } else {
//       setIndex(index + 1);
//     }
//   };

//   useEffect(() => {
//     if (mode === "automatic") {
//       const interval = setInterval(() => {
//         setIndex((prevIndex) => {
//           if (prevIndex === slides.length - 1) {
//             return 0;
//           } else {
//             return prevIndex + 1;
//           }
//         });
//       }, 4000);
//       return () => clearInterval(interval);
//     }
//   }, [mode, slides.length]);

//   return (
//     <section id="gallery">
//       <Carousel
//         slides={slides}
//         index={index}
//         handlePreviousSlide={handlePreviousSlide}
//         handleNextSlide={handleNextSlide}
//       />
//     </section>
//   );
// };

// export default Gallery;
