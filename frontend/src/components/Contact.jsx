import React, { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import "../styles/contact.css";

const Contact = () => {
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const inputChange = (e) => {
    const { name, value } = e.target;
    return setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      title: "Email Us",
      detail: "support@medifi.com",
      link: "mailto:support@medifi.com"
    },
    {
      icon: <FiPhone />,
      title: "Call Us",
      detail: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <FiMapPin />,
      title: "Visit Us",
      detail: "123 Healthcare Ave, Medical District",
      link: "#"
    }
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <div className="contact-badge">
            <span>Get In Touch</span>
          </div>
          <h2>Contact Us</h2>
          <p>
            Have questions about our services? We're here to help. 
            Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Start a Conversation</h3>
            <p>
              Whether you have questions about our services, need technical support, 
              or want to partner with us, we're ready to assist you.
            </p>
            
            <div className="contact-methods">
              {contactInfo.map((info, index) => (
                <a 
                  key={index} 
                  href={info.link} 
                  className="contact-method"
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  <div className="contact-icon">
                    {info.icon}
                  </div>
                  <div className="contact-detail">
                    <h4>{info.title}</h4>
                    <p>{info.detail}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form-container">
            <form
              method="POST"
              action={`https://formspree.io/f/${process.env.REACT_FORMIK_SECRET}`}
              className="contact-form"
            >
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="Enter your full name"
                  value={formDetails.name}
                  onChange={inputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="Enter your email address"
                  value={formDetails.email}
                  onChange={inputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-input"
                  placeholder="Tell us how we can help you"
                  value={formDetails.message}
                  onChange={inputChange}
                  rows="6"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary contact-submit">
                <FiSend />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
