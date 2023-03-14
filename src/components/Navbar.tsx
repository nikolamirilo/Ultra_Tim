import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/logo.png";
import { changeLanguage } from "i18next";
import { i18n } from "next-i18next";
import { useRouter } from "next/router";

const Navbar: React.FC = () => {
  // const onToggleLanguageClick = (lang: string) => {
  //   i18n.changeLanguage(lang);
  // };
  return (
    <nav className="navbar">
      <div className="logo">
        <Image src={logo} alt="Logo" style={{ margin: "0.5vh 0" }} />
      </div>
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <div className="links">
        <Link href="/">Početna</Link>
        <Link href="/offer">Ponuda</Link>
        <Link href="/contact">Kontakt</Link>
        {/* <div className="languages">
          <button onClick={}>EN</button>
          <button onClick={() => onToggleLanguageClick("sr")}>SR</button>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
