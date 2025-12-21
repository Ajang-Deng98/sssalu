import React from 'react';

const Membership: React.FC = () => {
  return (
    <div>
      <section style={{
        height: '40vh',
        minHeight: '300px',
        background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/assets/images/hero_homepage_3.jpg")',
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
          <h1 style={{ fontSize: '3rem', marginBottom: '15px', fontWeight: '700' }}>Membership</h1>
          <p style={{ fontSize: '1.2rem' }}>Join our community and be part of something bigger</p>
        </div>
      </section>

      <section className="membership-intro">
        <div className="container">
          <h2 className="section-title">Join Our Community</h2>
          <div className="intro-content">
            <p>Become a member of the South Sudanese Student Association at ALU and connect with fellow students who share your heritage and values.</p>
            <p>Our membership offers opportunities for personal growth, cultural celebration, and community service.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;