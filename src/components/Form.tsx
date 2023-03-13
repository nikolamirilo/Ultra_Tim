import React from "react";
import logo from "../../public/logo.png";
import Image from "next/image";

const Form: React.FC = () => {
  return (
    <div className="form">
      <form className="left-content">
        <h1>Contact Us</h1>
        <input type="text" id="nameInput" placeholder="Enter your name*" name="name" required={true} />
        <input type="email" id="emailInput" placeholder="Enter your email address*" name="email" required={true} />
        <input type="text" id="subjectInput" placeholder="Subject*" name="subject" required={true} />
        <textarea id="messageInput" required={true} name="message" placeholder="Enter your message*"></textarea>
        <button type="submit">Send</button>
      </form>
      <div className="right-content">
        <Image src={logo} alt="Ultra Tim" width={200} height={150} />
      </div>
    </div>
  );
};

export default Form;
