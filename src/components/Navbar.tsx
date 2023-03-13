import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/logo.png";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Image src={logo} alt="Logo" style={{ margin: "1vh 0" }} />
      </div>
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <div className="links">
        <Link href="/">Home</Link>
        <Link href="/offer">Offer</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
