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
      <section className="page-banner">
        <div className="banner-content">
          <h1>Alumni Network</h1>
          <p>Connecting past, present, and future South Sudanese students at ALU</p>
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
                <img src="/assets/images/leader1.jpg" alt="John Deng Akol" />
              </div>
              <div className="alumni-content">
                <h3>John Deng Akol</h3>
                <p className="alumni-title">Software Engineer at Google</p>
                <p className="alumni-graduation">Class of 2020 | Software Engineering</p>
                <p className="alumni-description">John is a passionate software engineer who has made significant contributions to technology innovation. He currently works at Google where he leads a team developing cutting-edge AI solutions.</p>
                <div className="alumni-quote">
                  <p>"SSSALU provided me with a strong foundation and network that continues to support my career growth. The community taught me the importance of giving back and staying connected to my roots."</p>
                </div>
                <div className="alumni-social">
                  <a href="https://www.linkedin.com/in/john-deng" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                  <a href="mailto:john.deng@example.com"><i className="fas fa-envelope"></i></a>
                </div>
              </div>
            </div>

            <div className="alumni-card">
              <div className="alumni-image">
                <img src="/assets/images/leader2.jpg" alt="Mary Ayen Dut" />
              </div>
              <div className="alumni-content">
                <h3>Mary Ayen Dut</h3>
                <p className="alumni-title">Entrepreneur & CEO at TechStart Africa</p>
                <p className="alumni-graduation">Class of 2019 | Entrepreneurial Leadership</p>
                <p className="alumni-description">Mary is a successful entrepreneur who founded TechStart Africa, a company focused on developing technology solutions for African markets. She has been recognized as one of the top young entrepreneurs in Africa.</p>
                <div className="alumni-quote">
                  <p>"The entrepreneurial spirit I developed at ALU and through SSSALU has been instrumental in building my company. The network continues to be a source of inspiration and collaboration."</p>
                </div>
                <div className="alumni-social">
                  <a href="https://www.linkedin.com/in/mary-ayen" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                  <a href="mailto:mary.ayen@example.com"><i className="fas fa-envelope"></i></a>
                </div>
              </div>
            </div>

            <div className="alumni-card">
              <div className="alumni-image">
                <img src="/assets/images/leader3.jpg" alt="Peter Garang Mabior" />
              </div>
              <div className="alumni-content">
                <h3>Peter Garang Mabior</h3>
                <p className="alumni-title">Policy Analyst at African Union</p>
                <p className="alumni-graduation">Class of 2021 | Global Challenges</p>
                <p className="alumni-description">Peter works as a policy analyst at the African Union, focusing on youth development and education policies across the continent. He is passionate about creating positive change in Africa.</p>
                <div className="alumni-quote">
                  <p>"SSSALU taught me the importance of community and collective action. These values guide my work in policy development and my commitment to African development."</p>
                </div>
                <div className="alumni-social">
                  <a href="https://www.linkedin.com/in/peter-garang" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                  <a href="mailto:peter.garang@example.com"><i className="fas fa-envelope"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="view-more">
            <a href="#" className="btn">View More Alumni Profiles</a>
          </div>
        </div>
      </section>

      {/* Where Are They Now Map */}
      <section className="alumni-map-section">
        <div className="container">
          <h2 className="section-title">Where Are They Now</h2>
          <p className="section-description">Our alumni are making an impact across the globe in various sectors and industries</p>

          <div className="alumni-map">
            <img src="/assets/images/backgroundgroup.jpg" alt="World Map with Alumni Locations" />
          </div>

          <div className="alumni-stats">
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Alumni</div>
            </div>

            <div className="stat-card">
              <div className="stat-number">12</div>
              <div className="stat-label">Countries</div>
            </div>

            <div className="stat-card">
              <div className="stat-number">25+</div>
              <div className="stat-label">Companies</div>
            </div>

            <div className="stat-card">
              <div className="stat-number">15</div>
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

          <div className="mentorship-content">
            <div className="mentorship-info">
              <h3>About the Program</h3>
              <p>The SSSALU Alumni Mentorship Program pairs current students with alumni mentors who provide guidance on academic success, career development, and personal growth. Mentors and mentees meet regularly throughout the academic year to set goals, track progress, and build meaningful relationships.</p>

              <h3>Program Benefits</h3>
              <ul className="benefits-list">
                <li><i className="fas fa-check-circle"></i> Personalized guidance from experienced alumni</li>
                <li><i className="fas fa-check-circle"></i> Career advice and industry insights</li>
                <li><i className="fas fa-check-circle"></i> Networking opportunities with professionals</li>
                <li><i className="fas fa-check-circle"></i> Support for academic and personal challenges</li>
                <li><i className="fas fa-check-circle"></i> Development of professional skills and competencies</li>
              </ul>

              <div className="mentorship-cta">
                <a href="#" className="btn">Become a Mentor</a>
                <a href="#" className="btn btn-outline">Request a Mentor</a>
              </div>
            </div>

            <div className="mentorship-testimonials">
              <div className="mentorship-testimonial">
                <div className="testimonial-content">
                  <p>"The mentorship program connected me with an alumnus working in my dream company. His guidance helped me secure an internship and eventually a full-time position at the same company."</p>
                  <div className="testimonial-author">
                    <h4>John Majok</h4>
                    <p>Current Student, Class of 2023</p>
                  </div>
                </div>
              </div>

              <div className="mentorship-testimonial">
                <div className="testimonial-content">
                  <p>"Being a mentor has been incredibly rewarding. I enjoy giving back to the SSSALU community and helping current students navigate the challenges I once faced."</p>
                  <div className="testimonial-author">
                    <h4>Mary Akol</h4>
                    <p>Alumni Mentor, Class of 2019</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support & Donate */}
      <section className="support-section">
        <div className="container">
          <h2 className="section-title">Support Our Community</h2>
          <p className="section-description">Help us empower the next generation of South Sudanese leaders at ALU</p>

          <div className="support-options">
            <div className="support-card">
              <div className="support-icon">
                <i className="fas fa-hand-holding-usd"></i>
              </div>
              <h3>Donate</h3>
              <p>Your financial contribution helps fund scholarships, events, and community initiatives for South Sudanese students at ALU.</p>
              <a href="#" className="btn btn-small">Make a Donation</a>
            </div>

            <div className="support-card">
              <div className="support-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <h3>Internships & Jobs</h3>
              <p>Offer internship or job opportunities to current students and recent graduates to help them gain valuable professional experience.</p>
              <a href="#" className="btn btn-small">Post an Opportunity</a>
            </div>

            <div className="support-card">
              <div className="support-icon">
                <i className="fas fa-chalkboard-teacher"></i>
              </div>
              <h3>Guest Speaking</h3>
              <p>Share your expertise and experiences with current students through guest lectures, workshops, or panel discussions.</p>
              <a href="#" className="btn btn-small">Become a Speaker</a>
            </div>

            <div className="support-card">
              <div className="support-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3>Partnerships</h3>
              <p>Collaborate with SSSALU on initiatives that benefit South Sudanese students and contribute to the development of South Sudan.</p>
              <a href="#" className="btn btn-small">Explore Partnerships</a>
            </div>
          </div>

          <div className="donation-info">
            <h3>How Your Donation Helps</h3>
            <div className="donation-allocation">
              <div className="allocation-item">
                <div className="allocation-percentage">50%</div>
                <div className="allocation-label">Scholarships</div>
              </div>
              <div className="allocation-item">
                <div className="allocation-percentage">25%</div>
                <div className="allocation-label">Events & Programs</div>
              </div>
              <div className="allocation-item">
                <div className="allocation-percentage">15%</div>
                <div className="allocation-label">Community Outreach</div>
              </div>
              <div className="allocation-item">
                <div className="allocation-percentage">10%</div>
                <div className="allocation-label">Administrative Costs</div>
              </div>
            </div>

            <a href="#" className="btn">Donate Now</a>
          </div>
        </div>
      </section>

      {/* Alumni Events */}
      <section className="alumni-events">
        <div className="container">
          <h2 className="section-title">Upcoming Alumni Events</h2>
          <p className="section-description">Stay connected with the SSSALU community through these special events</p>

          <div className="events-grid">
            <div className="event-card">
              <div className="event-date">
                <div className="date-box">
                  <span className="month">AUG</span>
                  <span className="day">20</span>
                  <span className="year">2024</span>
                </div>
              </div>
              <div className="event-details">
                <h3>Annual Alumni Reunion</h3>
                <div className="event-meta">
                  <p><i className="fas fa-clock"></i> 6:00 PM - 10:00 PM</p>
                  <p><i className="fas fa-map-marker-alt"></i> ALU Campus, Main Hall</p>
                </div>
                <p className="event-description">Join us for our annual alumni reunion where you can reconnect with former classmates, meet current students, and celebrate the achievements of our community.</p>
                <div className="event-actions">
                  <a href="#" className="btn btn-small">RSVP Now</a>
                </div>
              </div>
            </div>

            <div className="event-card">
              <div className="event-date">
                <div className="date-box">
                  <span className="month">SEP</span>
                  <span className="day">15</span>
                  <span className="year">2024</span>
                </div>
              </div>
              <div className="event-details">
                <h3>Virtual Career Panel</h3>
                <div className="event-meta">
                  <p><i className="fas fa-clock"></i> 3:00 PM - 5:00 PM</p>
                  <p><i className="fas fa-map-marker-alt"></i> Online (Zoom)</p>
                </div>
                <p className="event-description">A virtual panel discussion featuring alumni from various industries sharing insights about their career paths and offering advice to current students.</p>
                <div className="event-actions">
                  <a href="#" className="btn btn-small">Register Now</a>
                </div>
              </div>
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
