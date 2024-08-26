import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-info">
        <h3>Contact Information</h3>
        <p>
          We are always here to help you with any questions or concerns you
          might have. Whether you're looking for more information about our
          services or need assistance with a specific issue, don't hesitate to
          reach out to us.
        </p>
        <p>
          Feel free to contact us using the details below, and our dedicated
          team will be more than happy to assist you. We value your feedback and
          strive to provide the best possible support.
        </p>
        <p>
          <strong>Email: </strong>monter@gmail.com
        </p>
        <p>
          <strong>Phone: </strong> (123) 456-7890
        </p>
        <p>
          <strong>Adress: </strong>Niska 7A, Sremska Mitrovica
        </p>
      </div>
      <div className="contact-form">
        <h3>Get in Touch</h3>
        <form>
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Your message" rows={6} required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
