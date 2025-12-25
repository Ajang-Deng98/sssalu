import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Alumni: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div>
      {/* Page Banner */}
      <section style={{
        height: '80vh',
        minHeight: '600px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'var(--white)',
        paddingTop: '80px',
        overflow: 'hidden'
      }}>
        <video 
          autoPlay 
          muted 
          loop 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -2
          }}
        >
          <source src="/assets/videos/alumni_video.mp4" type="video/mp4" />
        </video>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.5)',
          zIndex: -1
        }} />
        <div style={{ maxWidth: '800px', padding: '0 20px', zIndex: 1 }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '15px', fontWeight: '700' }}>Alumni Network</h1>
          <p style={{ fontSize: '1.2rem' }}>Connecting past, present, and future South Sudanese students at ALU</p>
        </div>
      </section>

      {/* Alumni Introduction */}
      <section className="alumni-intro">
        <div className="container">
          <div className="intro-content">
            <h2 className="section-title">Our Alumni Community</h2>
            <p>The South Sudanese Student Association at African Leadership University takes pride in our growing network of alumni who continue to represent our values and make significant contributions in various fields and sectors.</p>
            <p>Our alumni remain an integral part of our community, providing mentorship, guidance, and support to current students while serving as ambassadors of both SSSALU and ALU in their professional endeavors.</p>
          </div>
        </div>
      </section>

      {/* Alumni Directory */}
      <section className="alumni-spotlight">
        <div className="container">
          <h2 className="section-title">Alumni Directory</h2>
          <p className="section-description">Meet our outstanding alumni and learn about their journeys after ALU</p>

          <div className="alumni-grid">
            <div className="alumni-card">
              <div className="alumni-image">
                <img src="/assets/images/aruei_alumni.jpg" alt="Abraham Aruei Thel Deng" />
              </div>
              <div className="alumni-content">
                <h3>Abraham Aruei Thel Deng</h3>
                <p className="alumni-title">Founder & Executive Director, Silicon High School</p>
                <p className="alumni-graduation">Class of 2024 | Software Engineering</p>
                <p className="alumni-description">Abraham Aruei Thel Deng is a purpose driven leader and technologist committed to expanding access to quality education and digital skills. As the Founder and Executive Director of Silicon High School, he works to empower young people through innovation, technology, and leadership, preparing the next generation to solve real world challenges.</p>
                <div className="alumni-quote">
                  <p>“My journey at ALU and through SSSALU shaped my leadership values and sense of responsibility. The ALU community taught me to lead with purpose, give back intentionally, and remain grounded in where I come from.”</p>
                </div>
                <div className="alumni-social">
                  <a href="https://www.linkedin.com/in/abraham-aruai-thel-deng/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recent_activity_content_view%3B%2Fmc7C%2F0YQLq5NKcmemviFg%3D%3D" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>

            <div className="alumni-card">
              <div className="alumni-image">
                <img src="/assets/images/Longmakeralumni.jpg" alt="Long Maker Long Deng" />
              </div>
              <div className="alumni-content">
                <h3>Long Maker Long Deng</h3>
                <p className="alumni-title">Software Engineer at Google at MTN South Sudan</p>
                <p className="alumni-graduation">Class of 2025 | Software Engineering</p>
                <p className="alumni-description">Long Maker Long Deng is a software professional working with MTN South Sudan, contributing to the development and delivery of technology solutions that support digital connectivity and innovation in the country. Through his work, he is actively involved in advancing practical tech solutions tailored to local and regional needs.</p>
                <div className="alumni-quote">
                  <p>“The strong foundation I built at ALU and through SSSALU has been instrumental in shaping my career in technology. The skills, values, and network continue to guide my professional growth and create opportunities for collaboration and impact.”</p>
                </div>
                <div className="alumni-social">
                  <a href="https://www.linkedin.com/in/long-maker-long-deng/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recent_activity_content_view%3BqKiT9EC8TImDUv1Q3k4R5Q%3D%3D" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Where Are They Now Map */}
      <section className="alumni-map-section">
        <div className="container">
          <h2 className="section-title">Where Are They Now</h2>
          <p className="section-description">Our alumni are making an impact across the globe in various sectors and industries</p>

          <div className="alumni-map">
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <img src="/assets/images/graduand1.jpg" alt="Graduate 1" style={{ width: '300px', height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
              <img src="/assets/images/graduand2.jpg" alt="Graduate 2" style={{ width: '300px', height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
              <img src="/assets/images/graduand3.jpg" alt="Graduate 3" style={{ width: '300px', height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
            </div>
          </div>

          <div className="alumni-stats">
            <div className="stat-card">
              <div className="stat-number">15+</div>
              <div className="stat-label">Alumni</div>
            </div>

            <div className="stat-card">
              <div className="stat-number">5+</div>
              <div className="stat-label">Companies</div>
            </div>

            <div className="stat-card">
              <div className="stat-number">7+</div>
              <div className="stat-label">Software Engineers</div>
            </div>

            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Entrepreneurs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentorship Program */}
      <section className="mentorship-section">
        <div className="container">
          <h2 className="section-title">Alumni Mentorship Program</h2>
          <p className="section-description">Connecting current students with alumni mentors for guidance and support</p>

          <div className="mentorship-content" style={{ display: 'flex', gap: '40px', alignItems: 'flex-start' }}>
            <div className="mentorship-info" style={{ flex: 1 }}>
              <h3>About the Program</h3>
              <p>The SSSALU Alumni Mentorship Program pairs current students with alumni mentors who provide guidance on academic success, career development, and personal growth. Mentors and mentees meet regularly throughout the academic year to set goals, track progress, and build meaningful relationships.</p>
            </div>
            <div className="mentorship-benefits" style={{ flex: 1 }}>
              <h3>Program Benefits</h3>
              <ul className="benefits-list">
                <li><i className="fas fa-check-circle"></i> Personalized guidance from experienced alumni</li>
                <li><i className="fas fa-check-circle"></i> Career advice and industry insights</li>
                <li><i className="fas fa-check-circle"></i> Networking opportunities with professionals</li>
                <li><i className="fas fa-check-circle"></i> Support for academic and personal challenges</li>
                <li><i className="fas fa-check-circle"></i> Development of professional skills and competencies</li>
              </ul>
            </div>
          </div>
          <div className="mentorship-cta" style={{ textAlign: 'center', marginTop: '30px' }}>
            <a href="#" className="btn">Become a Mentor</a>
            <a href="#" className="btn btn-outline">Request a Mentor</a>
          </div>
        </div>
      </section>

      {/* Support & Donate */}
      <section className="support-section">
        <div className="container">
          <h2 className="section-title">Support Our Community</h2>
          <p className="section-description">Help us empower the next generation of South Sudanese leaders at ALU.</p>

          <div className="support-options">
            <div className="support-card">
              <h3>Financial Support</h3>
              <p>Your contribution strengthens scholarships, student led events, and community initiatives that support South Sudanese students at ALU.</p>
            </div>

            <div className="support-card">
              <h3>Internships & Employment Opportunities</h3>
              <p>Provide internship or job opportunities for current students and recent graduates to help them build practical experience and professional confidence.</p>
            </div>

            <div className="support-card">
              <h3>Guest Engagement</h3>
              <p>Share your knowledge and lived experiences with students through talks, workshops, or panel discussions that inspire growth and leadership.</p>
            </div>

            <div className="support-card">
              <h3>Strategic Collaboration</h3>
              <p>Partner with SSSALU on initiatives that advance education, innovation, and national development for South Sudan.</p>
            </div>
          </div>
        </div>
      </section>



      {/* Stay Connected */}
      <section className="stay-connected">
        <div className="container">
          <h2>Stay Connected</h2>
          <p>Join our alumni network to stay updated with the latest news, events, and opportunities</p>

          <form className="alumni-form" onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
            <button type="submit" className="btn">Join Alumni Network</button>
          </form>

          <div className="social-links-large">
            <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
            <a href="#" className="social-link"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Alumni;
