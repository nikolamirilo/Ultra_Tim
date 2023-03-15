import { useTranslation } from "next-i18next";
import Image from "next/image";
import React from "react";
import logo from "../../public/logo.webp";

const Form: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="form">
      <form className="left-content">
        <h1>{t("Kontaktirajte nas")}</h1>
        <input
          type="text"
          id="nameInput"
          placeholder={t("Unesi ime*") as string}
          name="name"
          required={true}
        />
        <input
          type="email"
          id="emailInput"
          placeholder={t("Unesi email adresu*") as string}
          name="email"
          required={true}
        />
        <input
          type="text"
          id="subjectInput"
          placeholder={t("Tema/Predmet*") as string}
          name="subject"
          required={true}
        />
        <textarea
          id="messageInput"
          required={true}
          name="message"
          placeholder={t("Unesi poruku*") as string}
        ></textarea>
        <button type="submit">{t("Pošalji")}</button>
      </form>
      <div className="right-content">
        <Image src={logo} alt="Ultra Tim" width={200} height={140} />
      </div>
    </div>
  );
};

export default Form;
