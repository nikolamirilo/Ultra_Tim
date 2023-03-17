import emailjs from "@emailjs/browser";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import React, { useRef, useState } from "react";
import logo from "../../public/images/logo.webp";
import { FormProps } from "./../typescript/interfaces/components";

const Form: React.FC<FormProps> = () => {
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement>(null);

  const service_id = "service_0cttsm8";
  const template_id = "template_v2tzetg";
  const public_key = "oT1XBMBTSrIaWiqq4";

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nameInput = document.getElementById("nameInput") as HTMLInputElement;
    const emailInput = document.getElementById("emailInput") as HTMLInputElement;
    const subjectInput = document.getElementById("subjectInput")! as HTMLInputElement;
    const messageInput = document.getElementById("messageInput")! as HTMLInputElement;

    emailjs.sendForm(service_id, template_id, form.current!, public_key).then(
      (result) => {
        setIsFormSubmited(true);
        nameInput.value = "";
        emailInput.value = "";
        subjectInput.value = "";
        messageInput.value = "";
      },
      (error) => {
        alert(`Error`);
        console.log(error);
      }
    );
  };

  if (isFormSubmited) {
    alert("Form Submited");
  }

  return (
    <div className="form">
      <form className="left-content" ref={form} onSubmit={handleFormSubmit}>
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
