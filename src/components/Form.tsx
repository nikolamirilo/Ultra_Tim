import React from "react";

const Form: React.FC = () => {
  return (
    <form className="form">
      <h1>Contact Us</h1>
      <input type="text" id="nameInput" placeholder="Enter your name*" name="name" required={true} />
      <input type="email" id="emailInput" placeholder="Enter your email address*" name="email" required={true} />
      <input type="text" id="subjectInput" placeholder="Subject*" name="subject" required={true} />
      <textarea id="messageInput" required={true} name="message" placeholder="Enter your message*"></textarea>
      <button type="submit">Send</button>
    </form>
  );
};

export default Form;
