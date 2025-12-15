import React from 'react';
import './Contact.css';

interface ContactInfo {
  email: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
}

interface ContactProps {
  contactInfo: ContactInfo;
}

const Contact: React.FC<ContactProps> = ({ contactInfo }) => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Me contacter</h2>
        <div className="contact-content">
          <p className="contact-text">
            Je suis toujours ouvert aux nouvelles opportunités et collaborations. N'hésitez pas à me contacter !
          </p>
          <div className="contact-links">
            <a href={`mailto:${contactInfo.email}`} className="contact-link">
              <span>📧</span> {contactInfo.email}
            </a>
            {contactInfo.linkedin && (
              <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
                <span>💼</span> LinkedIn
              </a>
            )}
            {contactInfo.github && (
              <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="contact-link">
                <span>💻</span> GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
