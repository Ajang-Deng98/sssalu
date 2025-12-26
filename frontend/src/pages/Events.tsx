import React, { useState, useEffect } from 'react';

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  status: string;
  image: string;
  created_at: string;
}

const Events: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [message, setMessage] = useState('');
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/events/');
      const data = await response.json();
      if (Array.isArray(data)) {
        setEvents(data);
      }
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  };

  const upcomingEvents = events.filter(event => event.status === 'upcoming');
  const pastEvents = events.filter(event => event.status === 'past');

  const displayUpcoming = upcomingEvents;
  const displayPast = pastEvents;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/event-rsvp/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      setMessage(result.message);
      
      if (result.status === 'success') {
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
      }
    } catch (error) {
      setMessage('Error: Failed to submit RSVP. Please try again.');
    }
    setTimeout(() => setMessage(''), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
              {loading ? (
                <div style={{ textAlign: 'center', padding: '50px' }}>Loading events...</div>
              ) : (
                displayUpcoming.length > 0 ? (
                  displayUpcoming.map((event, index) => (
                    <div key={upcomingEvents.length > 0 ? event.id : index} className="event-card upcoming">
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
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No upcoming events scheduled. Add events through the admin panel.</p>
                )
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
              {loading ? (
                <div style={{ textAlign: 'center', padding: '50px' }}>Loading events...</div>
              ) : (
                displayPast.length > 0 ? (
                  displayPast.map((event, index) => (
                    <div key={pastEvents.length > 0 ? event.id : index} className="event-card past">
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
                            <span className="btn btn-small disabled">Event Completed</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No past events available. Add events through the admin panel.</p>
                )
              )}
            </div>
          </div>
        </section>
      )}



      {/* RSVP Form */}
      <section id="rsvp-form" className="rsvp-section">
        <div className="container">
          <h2 className="section-title">RSVP for an Event</h2>
          <p className="section-description">Please fill out the form below to register for an upcoming event</p>

          <form className="rsvp-form" onSubmit={handleSubmit}>
            {message && (
              <div style={{ 
                color: message.includes('Error') ? 'red' : 'green', 
                fontWeight: 'bold', 
                textAlign: 'center', 
                marginBottom: '20px',
                padding: '15px',
                background: message.includes('Error') ? '#f8d7da' : '#d4edda',
                border: `1px solid ${message.includes('Error') ? '#f5c6cb' : '#c3e6cb'}`,
                borderRadius: '5px'
              }}>
                {message}
              </div>
            )}
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
                {displayUpcoming.map((event, index) => (
                  <option key={upcomingEvents.length > 0 ? event.id : index} value={event.id}>
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
