import React from "react";
import "./02-Contact.css";
import "./03-Media.css";
import { FaEnvelope } from "react-icons/fa";
import { CallTo, Logo } from "../00-Comps/Comps";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e14b7811-c18a-4b93-93cb-8bf5c47ac8fb");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <section id="contact" className="contact">
      <h2 className="title-1">LET'S CONNECT</h2>
      <p className="title-2">
        Reach out with any relevant roles or collaborations
      </p>
      <p className="title-intro1 title-intro2">
        Have a project, collaboration, or idea to discuss? I’m always open to
        new opportunities and connections. Feel free to reach out—I’d love to
        hear from you!
      </p>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Info</h3>
          <p>
            <FaEnvelope className="contact-icon" />
            <span>sushilkumar567895@gmail.com</span>
          </p>
          <CallTo />
          <div className="logos">
            <Logo />
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-form">
          <input name="name" type="text" placeholder="Your Name" required />
          <input name="email" type="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
          <br />
          <button type="submit" className="btn" id="submit">
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
