import React from 'react';

const Gallery: React.FC = () => {
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
          <h1 style={{ fontSize: '3rem', marginBottom: '15px', fontWeight: '700' }}>Gallery</h1>
          <p style={{ fontSize: '1.2rem' }}>Explore our collection of memories, events, and moments</p>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <h2 className="section-title">Our Photo Gallery</h2>
          <p className="section-description">Browse through our collection of photos from events, activities, and special moments</p>

          <div className="gallery-grid">
            {[
              { title: "Cultural Night 2023", image: "/assets/images/event1.jpg", description: "Celebrating South Sudanese culture" },
              { title: "Academic Workshop", image: "/assets/images/event4.jpg", description: "Skills development session" },
              { title: "Community Outreach", image: "/assets/images/event5.jpg", description: "Giving back to the community" },
              { title: "Leadership Summit", image: "/assets/images/event6.jpg", description: "Developing future leaders" },
              { title: "Alumni Reunion", image: "/assets/images/event7.jpg", description: "Connecting with graduates" },
              { title: "Sports Tournament", image: "/assets/images/event8.jpg", description: "Friendly competition" }
            ].map((item, index) => (
              <div key={index} className="gallery-item">
                <img src={item.image} alt={item.title} />
                <div className="gallery-overlay">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;