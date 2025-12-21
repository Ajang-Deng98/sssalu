import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSuccessMessage('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSuccessMessage(''), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      {/* Page Banner */}
      <section style={{
        height: '40vh',
        minHeight: '300px',
        background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/assets/images/hero_homepage_1.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'var(--white)',
        paddingTop: '80px'
      }}>
        <div style={{ maxWidth: '800px', padding: '0 20px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '15px', fontWeight: '700' }}>Contact Us</h1>
          <p style={{ fontSize: '1.2rem' }}>Get in touch with the South Sudanese Student Association at ALU</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-info-grid">
            <div className="contact-info-card">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>Our Location</h3>
              <p>African Leadership University</p>
              <p>Kigali Innovation City</p>
              <p>Kigali, Rwanda</p>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h3>Email Us</h3>
              <p><a href="mailto:sssalu@alu.edu">sssalu@alu.edu</a></p>
              <p><a href="mailto:sssalu.president@alu.edu">sssalu.president@alu.edu</a></p>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <h3>Call Us</h3>
              <p><a href="tel:+250123456789">+250 123 456 789</a></p>
              <p><a href="tel:+250987654321">+250 987 654 321</a></p>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3>Office Hours</h3>
              <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p>Saturday: 10:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="contact-form-section">
        <div className="container">
          <div style={{ display: 'flex', gap: '30px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {/* Form Column */}
            <div style={{ flex: 1, minWidth: '400px' }}>
              <h2 className="section-title">Send Us a Message</h2>
              
              {successMessage && (
                <div style={{ color: 'green', fontWeight: 'bold', textAlign: 'center', padding: '15px', background: '#d4edda', border: '1px solid #c3e6cb', borderRadius: '5px', marginBottom: '20px' }}>
                  {successMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '20px auto', padding: '20px', border: '2px solid var(--primary-color)', borderRadius: '10px', background: '#f9f9f9' }}>
                <div style={{ marginBottom: '15px' }}>
                  <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Name:</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box' }}
                  />
                </div>
                
                <div style={{ marginBottom: '15px' }}>
                  <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email:</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box' }}
                  />
                </div>
                
                <div style={{ marginBottom: '15px' }}>
                  <label htmlFor="subject" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Subject:</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required 
                    style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box' }}
                  />
                </div>
                
                <div style={{ marginBottom: '15px' }}>
                  <label htmlFor="message" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Message:</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    required 
                    rows={5} 
                    style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box', resize: 'vertical' }}
                  />
                </div>
                
                <div style={{ textAlign: 'center' }}>
                  <input 
                    type="submit" 
                    value="Send Message" 
                    style={{ background: 'var(--primary-color)', color: 'white', padding: '15px 30px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' }}
                  />
                </div>
              </form>
            </div>

            {/* Map Column */}
            <div style={{ flex: 1, minWidth: '400px' }}>
              <h2 className="section-title">Find Us</h2>
              <div className="map">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5063966804!2d30.119441!3d-1.9436599999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca5e2c966cc71%3A0xf3bc79bba81a7776!2sAfrican%20Leadership%20University%2C%20Kigali%2C%20Rwanda!5e0!3m2!1sen!2srw!4v1623456789012!5m2!1sen!2srw" 
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="ALU Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-description">Find answers to common questions about contacting and connecting with SSSALU</p>

          <div className="faq-container">
            <div className="faq-item">
              <div className="faq-question">
                <h3>How can I join the South Sudanese Student Association?</h3>
                <span className="faq-toggle"><i className="fas fa-plus"></i></span>
              </div>
              <div className="faq-answer">
                <p>To join SSSALU, visit our Membership page and fill out the application form. You can also contact us directly via email or visit our office during office hours for more information.</p>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <h3>How long does it typically take to get a response to inquiries?</h3>
                <span className="faq-toggle"><i className="fas fa-plus"></i></span>
              </div>
              <div className="faq-answer">
                <p>We strive to respond to all inquiries within 24-48 hours during weekdays. For urgent matters, we recommend calling our office directly.</p>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <h3>Can non-South Sudanese students participate in your events?</h3>
                <span className="faq-toggle"><i className="fas fa-plus"></i></span>
              </div>
              <div className="faq-answer">
                <p>Absolutely! While our association primarily serves South Sudanese students, most of our events are open to all ALU students and staff. We welcome everyone interested in learning about South Sudanese culture and participating in our activities.</p>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <h3>How can I collaborate with SSSALU for an event or initiative?</h3>
                <span className="faq-toggle"><i className="fas fa-plus"></i></span>
              </div>
              <div className="faq-answer">
                <p>We're always open to collaborations! Please send us an email with your proposal or fill out the contact form on this page with details about your event or initiative. Our team will review your proposal and get back to you to discuss potential collaboration opportunities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
