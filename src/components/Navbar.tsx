import { i18n, useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import EN from "../../public/images/EN.webp";
import logo from "../../public/images/logo.webp";
import SR from "../../public/images/SR.webp";

const Navbar: React.FC = () => {
  const router = useRouter();
  const { route, asPath, query } = router;
  const { t } = useTranslation();
  console.log(router);
  async function handleChangeLanguage(lang: string) {
    if (i18n) {
      i18n.changeLanguage(lang);
      await router.push({ pathname: route, query }, asPath, { locale: lang });
      window.location.reload();
    }
  }
  return (
    <nav className="navbar">
      <div className="logo">
        <Image src={logo} alt="Logo" style={{ margin: "0.5vh 0" }} priority />
      </div>
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <div className="links">
        <Link href="/">{t("Početna")}</Link>
        <Link href="/offer">{t("Ponuda")}</Link>
        <Link href="/contact">{t("Kontakt")}</Link>
        <button
          onClick={() => {
            handleChangeLanguage("sr");
          }}
        >
          <Image src={SR} alt="Serbian Logo" width={50} height={25} priority />
        </button>
        <button
          onClick={() => {
            handleChangeLanguage("en");
          }}
        >
          <Image src={EN} alt="England Logo" width={50} height={25} priority />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
