import React, { useState } from 'react';

const Events: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [formData, setFormData] = useState({
    event_id: '',
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    alu_id: '',
    dietary_restrictions: '',
    additional_guests: 0,
    comments: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('RSVP submitted:', formData);
    // Reset form
    setFormData({
      event_id: '',
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      alu_id: '',
      dietary_restrictions: '',
      additional_guests: 0,
      comments: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const upcomingEvents = [
    { id: 1, title: 'Cultural Night 2024', date: '2024-03-15', location: 'ALU Main Hall', description: 'Join us for an evening celebrating South Sudanese culture with traditional music, dance, and food.' }
  ];
  const pastEvents = [
    { id: 2, title: 'Leadership Workshop', date: '2023-12-10', location: 'Conference Room A', description: 'A professional development workshop focused on building leadership skills.' }
  ];

  return (
    <div>
      {/* Page Banner */}
      <section style={{
        height: '85vh',
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
          playsInline
          preload="auto"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -2,
            filter: 'brightness(1.1) contrast(1.2) saturate(1.1)'
          }}
        >
          <source src="/assets/videos/event_video.mp4" type="video/mp4" />
        </video>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))',
          zIndex: -1
        }} />
        <div style={{ maxWidth: '800px', padding: '0 20px', position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '15px', fontWeight: '700' }}>Events</h1>
          <p style={{ fontSize: '1.2rem' }}>Join us for cultural celebrations, academic workshops, and community gatherings</p>
        </div>
      </section>

      {/* Events Filter */}
      <section className="events-filter">
        <div className="container">
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Events
            </button>
            <button 
              className={`filter-btn ${filter === 'upcoming' ? 'active' : ''}`}
              onClick={() => setFilter('upcoming')}
            >
              Upcoming Events
            </button>
            <button 
              className={`filter-btn ${filter === 'past' ? 'active' : ''}`}
              onClick={() => setFilter('past')}
            >
              Past Events
            </button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      {(filter === 'all' || filter === 'upcoming') && (
        <section className="events-section upcoming-events">
          <div className="container">
            <h2 className="section-title">Upcoming Events</h2>

            <div className="events-grid">
              {upcomingEvents.length > 0 ? (
                upcomingEvents.map((event, index) => (
                  <div key={index} className="event-card upcoming">
                    <div className="event-content">
                      <div className="event-date">
                        <div className="date-box">
                          <span className="month">{new Date(event.date).toLocaleDateString('en-US', { month: 'short' }).toUpperCase()}</span>
                          <span className="day">{new Date(event.date).getDate()}</span>
                          <span className="year">{new Date(event.date).getFullYear()}</span>
                        </div>
                      </div>
                      <div className="event-details">
                        <h3>{event.title}</h3>
                        <div className="event-meta">
                          <p><i className="fas fa-clock"></i> {new Date(event.date).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}</p>
                          <p><i className="fas fa-map-marker-alt"></i> {event.location}</p>
                        </div>
                        <p className="event-description">{event.description}</p>
                        <div className="event-actions">
                          <a href="#rsvp-form" className="btn btn-small">RSVP Now</a>
                          <a href="#" className="btn btn-small btn-outline">Add to Calendar</a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No upcoming events scheduled at the moment. Check back soon!</p>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Past Events */}
      {(filter === 'all' || filter === 'past') && (
        <section className="events-section past-events">
          <div className="container">
            <h2 className="section-title">Past Events</h2>

            <div className="events-grid">
              {pastEvents.length > 0 ? (
                pastEvents.map((event, index) => (
                  <div key={index} className="event-card past">
                    <div className="event-content">
                      <div className="event-date">
                        <div className="date-box past-date">
                          <span className="month">{new Date(event.date).toLocaleDateString('en-US', { month: 'short' }).toUpperCase()}</span>
                          <span className="day">{new Date(event.date).getDate()}</span>
                          <span className="year">{new Date(event.date).getFullYear()}</span>
                        </div>
                      </div>
                      <div className="event-details">
                        <h3>{event.title}</h3>
                        <div className="event-meta">
                          <p><i className="fas fa-clock"></i> {new Date(event.date).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}</p>
                          <p><i className="fas fa-map-marker-alt"></i> {event.location}</p>
                        </div>
                        <p className="event-description">{event.description}</p>
                        <div className="event-actions">
                          <a href="#event-gallery" className="btn btn-small">View Photos</a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No past events available. Check back after some events!</p>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Event Gallery */}
      <section id="event-gallery" className="event-gallery">
        <div className="container">
          <h2 className="section-title">Event Gallery</h2>
          <p className="section-description">Highlights from our past events and activities</p>

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

      {/* RSVP Form */}
      <section id="rsvp-form" className="rsvp-section">
        <div className="container">
          <h2 className="section-title">RSVP for an Event</h2>
          <p className="section-description">Please fill out the form below to register for an upcoming event</p>

          <form className="rsvp-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="event-select">Select Event</label>
              <select 
                id="event-select" 
                name="event_id" 
                value={formData.event_id}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Choose an event</option>
                {upcomingEvents.map((event, index) => (
                  <option key={index} value={event.id}>
                    {event.title} ({new Date(event.date).toLocaleDateString()})
                  </option>
                ))}
              </select>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="first-name">First Name</label>
                <input 
                  type="text" 
                  id="first-name" 
                  name="first_name" 
                  value={formData.first_name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="last-name">Last Name</label>
                <input 
                  type="text" 
                  id="last-name" 
                  name="last_name" 
                  value={formData.last_name}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>

            <div className="form-row">
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
                <label htmlFor="phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="alu-id">ALU ID Number</label>
              <input 
                type="text" 
                id="alu-id" 
                name="alu_id" 
                value={formData.alu_id}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="dietary">Dietary Restrictions (if any)</label>
              <input 
                type="text" 
                id="dietary" 
                name="dietary_restrictions" 
                value={formData.dietary_restrictions}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="additional-guests">Number of Additional Guests (if allowed)</label>
              <input 
                type="number" 
                id="additional-guests" 
                name="additional_guests" 
                min="0" 
                max="2" 
                value={formData.additional_guests}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="comments">Additional Comments</label>
              <textarea 
                id="comments" 
                name="comments" 
                rows={4}
                value={formData.comments}
                onChange={handleChange}
              />
            </div>

            <div className="form-group checkbox-group">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">I understand that by submitting this form, I am committing to attend the event</label>
            </div>

            <button type="submit" className="btn">Submit RSVP</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Events;
