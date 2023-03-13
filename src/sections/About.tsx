import Image from "next/image";
import React from "react";
import BW from "../../public/images/BW.jpg";

const About: React.FC = () => {
  return (
    <section id="about">
      <div className="content">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non dolorem vero rerum quibusdam
          repellendus magni! Dignissimos, cumque assumenda, minus explicabo nesciunt earum
          perferendis consectetur veritatis architecto quas officiis distinctio quis? Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Non dolorem vero rerum quibusdam repellendus
          magni! Dignissimos, cumque assumenda, minus explicabo nesciunt earum perferendis
          consectetur veritatis architecto quas officiis distinctio quis? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Voluptatem deserunt sed dolorem tempore, enim illo maiores
          quo inventore aliquam numquam quibusdam aliquid dolor animi similique exercitationem
          tenetur delectus? Ducimus, sed!
        </p>
      </div>
      <div className="image">
        <Image src={BW} alt="Belgrade" />
      </div>
    </section>
  );
};

export default About;
