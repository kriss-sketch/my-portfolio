import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('HSUD_ZoxTiKEv1CMo');
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError(''); // Clear error when user starts typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Email parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_email: 'krisgula221995@gmail.com',
      subject: formData.subject,
      message: formData.message,
      reply_to: formData.email
    };

    // Send email
    emailjs
      .send(
        'service_q0m247b', 
        'template_31zcqyg', 
        templateParams
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setSubmitted(true);
          setFormData({ name: '', email: '', subject: '', message: '' });
          setLoading(false);
          setTimeout(() => setSubmitted(false), 3000);
        },
        (error) => {
          console.log('FAILED...', error);
          setError('Failed to send message. Please try again.');
          setLoading(false);
        }
      );
  };

  return (
    <div className="contact-container">
      <h2>Get In Touch</h2>
      <p className="contact-intro">I’m open to software developer opportunities and collaborations.
Feel free to reach out if you’d like to work together.</p>
      
      <div className="contact-content">
        <div className="contact-info">
          <div className="info-item">
            <h3>Email</h3>
            <p><a href="https://mail.google.com/mail/u/0/?hl=en-GB#inbox">krisgula221995@gmail.com</a></p>
          </div>
          <div className="info-item">
            <h3>Phone</h3>
            <p><a href="tel:+639278582028">+63 (927) 858-2028</a></p>
          </div>
          <div className="info-item">
            <h3>Location</h3>
            <p>Butuan City, Philippines</p>
          </div>
          <div className="social-links">
            <h3>Follow Me</h3>
            <div className="social-icons">
              <a href="https://github.com/kriss-sketch" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub</a>
              <a href="https://discord.com/users/ik.kaii" target="_blank" rel="noopener noreferrer" aria-label="Discord">Discord</a>
              <a href="https://www.facebook.com/krista.japona" target="_blank" rel="noopener noreferrer" aria-label="Facebook">Facebook</a>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {submitted && <div className="success-message">✓ Thank you! I'll get back to you soon.</div>}
          {error && <div className="error-message">✗ {error}</div>}
          
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
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
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

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
