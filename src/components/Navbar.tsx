import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/logo.png";
import { useRouter } from "next/router";
import { i18n, useTranslation } from "next-i18next";

const Navbar: React.FC = () => {
  const router = useRouter();
  const { route, asPath, query } = router;
  const { t } = useTranslation();
  console.log(router);
  function handleChangeLanguage(lang: string) {
    if (i18n) {
      i18n.changeLanguage(lang);
      router.push({ pathname: route, query }, asPath, { locale: lang });
    }
  }
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
        <Link href="/">{t("Početna")}</Link>
        <Link href="/offer">{t("Ponuda")}</Link>
        <Link href="/contact">{t("Kontakt")}</Link>
        <div className="languages">
          <button
            onClick={() => {
              handleChangeLanguage("en");
            }}
          >
            EN
          </button>
          <button
            onClick={() => {
              handleChangeLanguage("sr");
            }}
          >
            SR
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
