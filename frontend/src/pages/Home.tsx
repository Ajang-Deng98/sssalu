import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const allImages = [
  '/assets/images/hero_homepage_1.jpg',
  '/assets/images/hero_homepage_2.jpg',
  '/assets/images/background_images1.jpg',
  '/assets/images/hero_homepage_3.jpg',
  '/assets/images/background_images2.jpg',
  '/assets/images/background_images3.jpg',
  
];

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % allImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero hero-slider">
        {allImages.map((image, index) => (
          <div 
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("${image}")` }}
          />
        ))}
        <div className="hero-content">
          <h1>Welcome to South Sudanese Student Association</h1>
          <h2>African Leadership University</h2>
          <p>Uniting South Sudanese students at ALU to celebrate our heritage, build community, and create positive change.</p>
          <Link to="/about" className="btn">Learn More</Link>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="highlights">
        <div className="container">
          <h2 className="section-title">Key Highlights</h2>
          <div className="highlights-grid">
            <div className="highlight-card">
              <div className="card-icon">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <h3>Events</h3>
              <h4>Discover Our Activities</h4>
              <p>Explore upcoming cultural celebrations, academic workshops, and community gatherings that bring our members together.</p>
              <Link to="/events" className="btn">View Events</Link>
            </div>

            <div className="highlight-card">
              <div className="card-icon">
                <i className="fas fa-newspaper"></i>
              </div>
              <h3>News & Updates</h3>
              <h4>Stay Informed</h4>
              <p>Read the latest news, stories, and insights from our vibrant South Sudanese student community at ALU.</p>
              <Link to="/news" className="btn">Read News</Link>
            </div>

            <div className="highlight-card">
              <div className="card-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Community</h3>
              <h4>Join Our Family</h4>
              <p>Become part of a supportive community that celebrates South Sudanese heritage and builds lasting connections.</p>
              <Link to="/membership" className="btn">Become a Member</Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Preview */}
      <section className="about-preview">
        <div className="container">
          <div className="about-content">
            <h2 className="section-title">Who We Are</h2>
            <p>The SSSALU at African Leadership University is a vibrant community dedicated to celebrating our cultural heritage, fostering academic excellence, and creating meaningful connections among South Sudanese students.</p>
            <p>Our association provides a supportive environment where members can embrace their identity, share experiences, and collaborate on initiatives that benefit both our community and the broader ALU campus.</p>
            <Link to="/about" className="btn">About Us</Link>
          </div>
          <div className="about-image">
            <img src="/assets/images/background_images1.jpg" alt="SSSALU Group" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">What Our Members Say</h2>
          <div className="testimonial-slider">
            <div className="testimonial">
              <div className="testimonial-content">
                <p>"Being part of SSSALU has been one of the highlights of my university experience. I've found a community that feels like family away from home."</p>
                <div className="testimonial-author">
                  <h4>Chol A.</h4>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-content">
                <p>"Through SSSALU, I've been able to stay connected to my roots while embracing the diverse environment at ALU. The cultural events are always a highlight of the year!"</p>
                <div className="testimonial-author">
                  <h4>Mary A.</h4>
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
          <Link to="/membership" className="btn btn-red">Become a Member</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
