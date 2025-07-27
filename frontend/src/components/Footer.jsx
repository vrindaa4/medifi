import React from "react";
import "../styles/footer.css";
import { FaFacebookF, FaYoutube, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", to: "/#about" },
      { name: "Our Services", to: "/doctors" },
      { name: "Careers", to: "/#careers" },
      { name: "Press", to: "/#press" }
    ],
    services: [
      { name: "Book Appointment", to: "/appointments" },
      { name: "Second Opinion", to: "/#second-opinion" },
      { name: "Health Checkup", to: "/#health-checkup" },
      { name: "Virtual Consultation", to: "/#virtual-consultation" }
    ],
    support: [
      { name: "Help Center", to: "/#help" },
      { name: "Contact Us", to: "/#contact" },
      { name: "Privacy Policy", to: "/#privacy" },
      { name: "Terms of Service", to: "/#terms" }
    ]
  };

  const socialLinks = [
    { icon: <FaFacebookF />, href: "https://www.facebook.com/", label: "Facebook" },
    { icon: <FaTwitter />, href: "https://www.twitter.com/", label: "Twitter" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/", label: "Instagram" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/", label: "LinkedIn" },
    { icon: <FaYoutube />, href: "https://www.youtube.com/", label: "YouTube" }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">Medifi</h3>
            <p>
              Revolutionizing healthcare access through technology. 
              Connect with verified medical professionals and get the care you deserve.
            </p>
            <div className="footer-contact">
              <div className="contact-item">
                <FiMail />
                <span>support@medifi.com</span>
              </div>
              <div className="contact-item">
                <FiPhone />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <FiMapPin />
                <span>123 Healthcare Ave, Medical District</span>
              </div>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <NavLink to={link.to}>{link.name}</NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <NavLink to={link.to}>{link.name}</NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-section">
              <h4>Support</h4>
              <ul>
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <NavLink to={link.to}>{link.name}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              © {currentYear} Medifi. All rights reserved.
            </div>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="social-link"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
