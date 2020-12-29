import React from 'react';
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact__container">
      <form action="https://formspree.io/f/xpzorzok" method="POST">
        <div className="text__container">
          <h5>Contact</h5>
          <p>I will get back on your asap!</p>
        </div>
        <div className="inputs__container">
          <div className="input">
            <span>Name:</span>
            <input type="text" name="name" />
          </div>
          <div className="input">
            <span>E-mail:</span>
            <input type="email" name="_replyto" />
          </div>
        </div>
        <div className="text-area__container">
          <div className="text-area" >
            <span>Message:</span>
            <textarea type="text" name="message" />
          </div>
        </div>
        <div className="button__container">
          <button type="submit">Submit</button>
        </div>
        <p className="email">Or directly by emial: dawid.neumann.official@gmail.com</p>
      </form>
    </div>
  );
}

export default Contact;