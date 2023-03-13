import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/logo.png";

const Navbar: React.FC = () => {
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
      </div>
    </nav>
  );
};

export default Navbar;
