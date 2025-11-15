import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api, Event, News } from '../services/api.ts';
import { allImages } from '../utils/imageSlider.ts';

const Home: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [news, setNews] = useState<News[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    api.getEvents().then(setEvents).catch(console.error);
    api.getNews().then(setNews).catch(console.error);
  }, []);

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
          <Link to="/about" className="btn btn-red">Learn More</Link>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="highlights">
        <div className="container">
          <h2 className="section-title">Key Highlights</h2>
          <div className="highlights-grid">
            {events.length > 0 ? (
              events.map((event, index) => (
                <div key={index} className="highlight-card">
                  <div className="card-icon">
                    <i className="fas fa-calendar-alt"></i>
                  </div>
                  <h3>Upcoming Event</h3>
                  <h4>{event.title}</h4>
                  <p>{event.description.substring(0, 100)}...</p>
                  <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
                  <p><strong>Location:</strong> {event.location}</p>
                  <Link to="/events" className="btn btn-small">View Details</Link>
                </div>
              ))
            ) : (
              <div className="highlight-card">
                <div className="card-icon">
                  <i className="fas fa-calendar-alt"></i>
                </div>
                <h3>Upcoming Event</h3>
                <h4>No events scheduled</h4>
                <p>Check back soon for upcoming events!</p>
                <Link to="/events" className="btn btn-small">View All Events</Link>
              </div>
            )}
            
            {news.length > 0 ? (
              news.slice(0, 1).map((article, index) => (
                <div key={index} className="highlight-card">
                  <div className="card-icon">
                    <i className="fas fa-newspaper"></i>
                  </div>
                  <h3>Latest News</h3>
                  <h4>{article.title}</h4>
                  <p>{article.content.substring(0, 100)}...</p>
                  <Link to="/news" className="btn btn-small">Read More</Link>
                </div>
              ))
            ) : (
              <div className="highlight-card">
                <div className="card-icon">
                  <i className="fas fa-newspaper"></i>
                </div>
                <h3>News</h3>
                <h4>No news available</h4>
                <p>Check back for the latest updates!</p>
                <Link to="/news" className="btn btn-small">View All News</Link>
              </div>
            )}
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
            <img src="/assets/images/photogroup.jpg" alt="SSSALU Group Photo" />
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
                  <h4>John Deng</h4>
                  <p>Business Management, Class of 2023</p>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-content">
                <p>"Through SSSALU, I've been able to stay connected to my roots while embracing the diverse environment at ALU. The cultural events are always a highlight of the year!"</p>
                <div className="testimonial-author">
                  <h4>Mary Ayen</h4>
                  <p>Computer Science, Class of 2024</p>
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