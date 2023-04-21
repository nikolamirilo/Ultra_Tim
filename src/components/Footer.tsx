import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import logo from "../../public/images/logo.webp";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="left-content">
        <Image src={logo} alt="Logo" />
      </div>
      <div className="middle-content">
        <div className="email">
          <label htmlFor="email">Email:</label>
          <Link href="mailto:ultra.tim@gmail.com" id="email">
            ultra.tim.office@gmail.com
          </Link>
        </div>
        <div className="phone">
          <label htmlFor="phone">{t("Telefon")}:</label>
          <Link href="tel:+381 61 23 00 777" id="phone">
            +381 61 23 00 777
          </Link>
        </div>
      </div>
      <div className="right-content">
        <div className="social-media">
          <button
            onClick={() => {
              window.location.href = "https://www.instagram.com/ultra_tim_s/";
            }}
          >
            <AiOutlineInstagram />
          </button>
          <button>
            <FaFacebookF />
          </button>
        </div>
        <p>Copyright @2023 Ultra Tim</p>
      </div>
    </footer>
  );
};

export default Footer;
