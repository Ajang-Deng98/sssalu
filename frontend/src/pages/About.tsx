import React from 'react';

const About: React.FC = () => {

  return (
    <div>
      {/* Page Banner */}
      <section style={{
        height: '70vh',
        minHeight: '500px',
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
          <h1 style={{ fontSize: '3rem', marginBottom: '15px', fontWeight: '700' }}>About Us</h1>
          <p style={{ fontSize: '1.2rem' }}>Learn about our history, mission, values, and leadership</p>
        </div>
      </section>

      {/* History Section */}
      <section className="about-section history">
        <div className="container">
          <h2 className="section-title">Our History</h2>
          <div className="about-content">
            <div className="about-text">
              <p>The South Sudanese Student Association at African Leadership University was founded in 2023 by a group of passionate South Sudanese students who recognized the need for a community that celebrates their shared heritage while pursuing academic excellence.</p>
              <p>What began as informal gatherings among friends quickly evolved into a structured organization with a clear mission and vision. Over the two years, SSSALU has grown from a small group of founding members to a vibrant community of students, alumni, and supporters.</p>
              <p>Throughout our history, we have organized cultural celebrations, academic support programs, community outreach initiatives, and professional development opportunities for our members. Our association has become a home away from home for South Sudanese students at ALU, providing a supportive environment where they can embrace their identity and build meaningful connections.</p>
            </div>
            <div className="about-image">
              <img src="/assets/images/history.jpg" alt="SSSALU History" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="about-section mission-vision">
        <div className="container">
          <div className="mission-vision-container">
            <div className="mission-box">
              <div className="icon">
                <i className="fas fa-bullseye"></i>
              </div>
              <h2>Our Mission</h2>
              <p>To unite South Sudanese students at African Leadership University by creating a supportive community that celebrates our cultural heritage, promotes academic excellence, and develops future leaders who will contribute positively to South Sudan and the global community.</p>
            </div>
            <div className="vision-box">
              <div className="icon">
                <i className="fas fa-eye"></i>
              </div>
              <h2>Our Vision</h2>
              <p>To be a leading student association that empowers South Sudanese students to embrace their identity, achieve their full potential, and become change-makers who will contribute to the development and unity of South Sudan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="about-section core-values">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3>Unity</h3>
              <p>We believe in bringing together South Sudanese students from diverse backgrounds, fostering a sense of belonging and shared identity.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-book"></i>
              </div>
              <h3>Excellence</h3>
              <p>We strive for excellence in all our endeavors, encouraging academic achievement and personal growth among our members.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-globe-africa"></i>
              </div>
              <h3>Cultural Pride</h3>
              <p>We celebrate and preserve our rich South Sudanese cultural heritage while embracing the diversity of the ALU community.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-hands-helping"></i>
              </div>
              <h3>Service</h3>
              <p>We are committed to serving our community and contributing positively to South Sudan's development through various initiatives.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Innovation</h3>
              <p>We encourage creative thinking and innovative solutions to address the challenges facing our community and country.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Inclusivity</h3>
              <p>We welcome and respect all individuals regardless of their background, promoting diversity and inclusion within our association.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="about-section leadership">
        <div className="container">
          <h2 className="section-title">Our Leadership Team</h2>
          <p className="section-description">Meet the dedicated individuals who lead our association and work tirelessly to create meaningful experiences for our members.</p>

          {/* Main leadership grid for the first three leaders */}
          <div className="leadership-grid">
            <div className="leader-card" style={{ gridColumn: 'span 1', transform: 'scale(1.05)', backgroundColor: '#e6f2ff', border: '2px solid var(--primary-color)' }}>
              <div className="leader-image">
                <img src="/assets/images/president_Chol.jpg" alt="Chol Deng" />
              </div>
              <div className="leader-info">
                <h3 style={{ fontSize: '1.7rem', color: 'var(--primary-color)' }}>Chol Daniel Deng Dau</h3>
                <h4 style={{ fontSize: '1.3rem', color: 'var(--secondary-color)' }}>President</h4>
                <p>Chol is the President of the South Sudanese Students Association at ALU and a third-year Software Engineering student. He is passionate about using technology to support community building and leadership development. Since his first year at ALU, Chol has been an active member of the association. As President, he leads with vision and commitment, guiding the team, representing the association in key spaces, and working to empower South Sudanese students through unity, innovation, and service.</p>
                <div className="social-links">
                  <a href="https://www.linkedin.com/in/chol-daniel/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                  <a href="https://www.facebook.com/chol.daniel" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                  <a href="mailto:chol.daniel@alu.edu"><i className="fas fa-envelope"></i></a>
                </div>
              </div>
            </div>

            <div className="leader-card" style={{ gridColumn: 'span 1', transform: 'scale(1.05)', backgroundColor: '#e6f2ff', border: '2px solid var(--primary-color)' }}>
              <div className="leader-image">
                <img src="/assets/images/leader2.jpg" alt="Jacob Akech Majur" />
              </div>
              <div className="leader-info">
                <h3 style={{ fontSize: '1.7rem', color: 'var(--primary-color)' }}>Jacob Akech Majur</h3>
                <h4 style={{ fontSize: '1.3rem', color: 'var(--secondary-color)' }}>Vice President</h4>
                <p>Akech, the Vice President of the South Sudanese Students Association at ALU, is studying entrepreneurial leadership with a strong interest in international development and global business strategy. He plays a key role in coordinating team efforts, supporting mentorship initiatives, and building leadership capacity that creates impact both within the ALU community and beyond.</p>
                <div className="social-links">
                  <a href="https://www.linkedin.com/in/akech-jacob-majur-09948b313/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                  <a href="https://www.facebook.com/jacob.akech" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                  <a href="mailto:jacob.akech@alu.edu"><i className="fas fa-envelope"></i></a>
                </div>
              </div>
            </div>

            <div className="leader-card" style={{ gridColumn: 'span 1', transform: 'scale(1.05)', backgroundColor: '#e6f2ff', border: '2px solid var(--primary-color)' }}>
              <div className="leader-image">
                <img src="/assets/images/leader3.jpg" alt="Suzan Nyachiaran Ruai" />
              </div>
              <div className="leader-info">
                <h3 style={{ fontSize: '1.7rem', color: 'var(--primary-color)' }}>Suzan Nyachiaran Ruai</h3>
                <h4 style={{ fontSize: '1.3rem', color: 'var(--secondary-color)' }}>Secretary General</h4>
                <p>Suzan is the Secretary General of the South Sudanese Students Association at ALU. She is studying entrepreneurial leadership and is committed to using business and innovation to address social challenges. She oversees the association's operations, coordinates team activities, and ensures effective communication and execution of our goals.</p>
                <div className="social-links">
                  <a href="https://www.linkedin.com/in/suzan-ruai" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                  <a href="https://www.facebook.com/suzan.ruai" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                  <a href="mailto:suzan.ruai@alu.edu"><i className="fas fa-envelope"></i></a>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary leadership grid for the last four leaders in one row */}
          <div className="secondary-leadership-grid">
            <div className="leader-card small-leader">
              <div className="leader-image">
                <img src="/assets/images/leader6.jpg" alt="Jongkuch Chol Anyar" />
              </div>
              <div className="leader-info">
                <h3>Jongkuch Chol Anyar</h3>
                <h4>Treasurer</h4>
                <p>Jongkuch serves as the Finance Officer for the South Sudanese Students Association at ALU. He is studying Software Engineering and is responsible for overseeing the association's budget and financial planning. He ensures that resources are allocated effectively to support programs, events, and long-term goals.</p>
                <div className="social-links">
                  <a href="https://www.linkedin.com/in/jongkuch-anyar-36535131b/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                  <a href="https://www.facebook.com/jongkuch.anyar" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                  <a href="mailto:jongkuch.anyar@alu.edu"><i className="fas fa-envelope"></i></a>
                </div>
              </div>
            </div>

            <div className="leader-card small-leader">
              <div className="leader-image">
                <img src="/assets/images/leader5.jpg" alt="Goch Thiong" />
              </div>
              <div className="leader-info">
                <h3>Goch Thiong Garang Akot</h3>
                <h4>Events Coordinator</h4>
                <p>Goch is the Events Coordinator for the South Sudanese Students Association at ALU. He is studying entrepreneurial leadership and brings creativity and precision to planning and executing cultural celebrations, social gatherings, and community outreach events that strengthen unity and pride among members.</p>
                <div className="social-links">
                  <a href="https://www.linkedin.com/in/goch-thiong/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                  <a href="https://www.facebook.com/goch.thiong" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                  <a href="mailto:goch.thiong@alu.edu"><i className="fas fa-envelope"></i></a>
                </div>
              </div>
            </div>

            <div className="leader-card small-leader">
              <div className="leader-image">
                <img src="/assets/images/leader7.jpg" alt="Angeth Chol Ajak Deng" />
              </div>
              <div className="leader-info">
                <h3>Angeth Chol Ajak Deng</h3>
                <h4>Secretary for Sports, Culture, and Entertainment</h4>
                <p>Angeth serves as the Secretary for Sports, Culture, and Entertainment in the South Sudanese Students Association at ALU. She is studying entrepreneurial leadership and is passionate about using storytelling to celebrate and promote South Sudanese culture. She manages the association's social media presence and builds partnerships that strengthen cultural engagement within the ALU community.</p>
                <div className="social-links">
                  <a href="https://www.linkedin.com/in/angeth-chol-423b92302/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                  <a href="https://www.facebook.com/angeth.deng" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                  <a href="mailto:angeth.deng@alu.edu"><i className="fas fa-envelope"></i></a>
                </div>
              </div>
            </div>

            <div className="leader-card small-leader">
              <div className="leader-image">
                <img src="/assets/images/leader4.jpg" alt="Monica Mabior" />
              </div>
              <div className="leader-info">
                <h3>Monica Mabior</h3>
                <h4>Academic and Professional Development Officer</h4>
                <p>Monica serves as the Academic and Professional Development Officer in the South Sudanese Students Association at ALU. She is studying entrepreneurial leadership and focuses on creating opportunities for academic growth and career development. She organizes outreach programs and builds partnerships with local and international organizations to support students and drive meaningful impact.</p>
                <div className="social-links">
                  <a href="https://www.linkedin.com/in/monica-mabior-3448112b8/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                  <a href="https://www.facebook.com/monica.mabior" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                  <a href="mailto:monica.mabior@alu.edu"><i className="fas fa-envelope"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <div className="container">
          <h2>Join Our Community Today</h2>
          <p>Become a member of the South Sudanese Student Association and be part of a supportive community that celebrates our heritage and builds lasting connections.</p>
          <a href="/membership" className="btn">Become a Member</a>
        </div>
      </section>
    </div>
  );
};

export default About;
