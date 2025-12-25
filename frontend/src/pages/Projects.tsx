import React from 'react';

const Projects: React.FC = () => {
  return (
    <div>
      <section style={{
        height: '70vh',
        minHeight: '600px',
        background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/assets/images/background_projectdone.jpg")',
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
          <h1 style={{ fontSize: '3rem', marginBottom: '15px', fontWeight: '700' }}>Projects</h1>
          <p style={{ fontSize: '1.2rem' }}>Discover our initiatives and community impact projects</p>
        </div>
      </section>

      <section className="projects-intro">
        <div className="container">
          <h2 className="section-title">Our Projects</h2>
          <div className="intro-content">
            <p>SSSALU is committed to making a positive impact through various projects and initiatives that benefit our community and beyond.</p>
            <p>From educational programs to community outreach, our projects reflect our values and commitment to service.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;