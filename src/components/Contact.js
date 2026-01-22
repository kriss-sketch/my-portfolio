import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="contact-container">
      <h2>Get In Touch</h2>
      <p className="contact-intro">I'd love to hear from you! Feel free to reach out with any inquiries.</p>
      
      <div className="contact-content">
        <div className="contact-info">
          <div className="info-item">
            <h3>Email</h3>
            <p><a href="mailto:your@email.com">your@email.com</a></p>
          </div>
          <div className="info-item">
            <h3>Phone</h3>
            <p><a href="tel:+1234567890">+1 (234) 567-890</a></p>
          </div>
          <div className="info-item">
            <h3>Location</h3>
            <p>Your City, Your Country</p>
          </div>
          <div className="social-links">
            <h3>Follow Me</h3>
            <div className="social-icons">
              <a href="#" aria-label="GitHub">GitHub</a>
              <a href="#" aria-label="LinkedIn">LinkedIn</a>
              <a href="#" aria-label="Twitter">Twitter</a>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {submitted && <div className="success-message">✓ Thank you! I'll get back to you soon.</div>}
          
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
