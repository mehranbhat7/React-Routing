import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      <br />
      <p>Feel free to reach out me .</p>
      <br />
      <br />

      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Submit it</button>
      </form>
    </div>
  );
};

export default Contact;
