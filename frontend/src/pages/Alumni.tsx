import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface AlumniMember {
  id: number;
  first_name: string;
  last_name: string;
  graduation_year: number;
  program: string;
  current_position: string;
  company: string;
  email: string;
  linkedin: string;
  photo: string;
  bio: string;
  achievements: string;
  created_at: string;
}

const Alumni: React.FC = () => {
  const [email, setEmail] = useState('');
  const [alumni, setAlumni] = useState<AlumniMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [showMentorForm, setShowMentorForm] = useState(false);
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [mentorMessage, setMentorMessage] = useState('');
  const [requestMessage, setRequestMessage] = useState('');
  
  useEffect(() => {
    fetchAlumni();
  }, []);

  const fetchAlumni = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/alumni/');
      const data = await response.json();
      if (Array.isArray(data)) {
        setAlumni(data);
      }
    } catch (error) {
      console.error('Error fetching alumni:', error);
    } finally {
      setLoading(false);
    }
  };

  const displayAlumni = alumni.length > 0 ? alumni : [];
  
  const [mentorFormData, setMentorFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    graduation_year: '',
    program: '',
    current_position: '',
    company: '',
    experience_years: '',
    expertise_areas: '',
    mentoring_experience: '',
    availability: '',
    motivation: ''
  });

  const [requestFormData, setRequestFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    student_id: '',
    program: '',
    year_of_study: '',
    career_interests: '',
    mentoring_goals: '',
    preferred_mentor_background: '',
    availability: '',
    additional_info: ''
  });

  const [connectMessage, setConnectMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/newsletter/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const result = await response.json();
      setConnectMessage(result.message);
      
      if (result.status === 'success' || result.status === 'info') {
        setEmail('');
      }
    } catch (error) {
      setConnectMessage('Error: Failed to join network. Please try again.');
    }
    setTimeout(() => setConnectMessage(''), 5000);
  };

  const handleMentorSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/mentor-application/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(mentorFormData),
      });
      const result = await response.json();
      setMentorMessage(result.message);
      if (result.status === 'success') {
        setMentorFormData({
          first_name: '', last_name: '', email: '', phone: '', graduation_year: '',
          program: '', current_position: '', company: '', experience_years: '',
          expertise_areas: '', mentoring_experience: '', availability: '', motivation: ''
        });
      }
    } catch (error) {
      setMentorMessage('Error: Failed to submit application.');
    }
    setTimeout(() => setMentorMessage(''), 5000);
  };

  const handleRequestSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/mentor-request/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestFormData),
      });
      const result = await response.json();
      setRequestMessage(result.message);
      if (result.status === 'success') {
        setRequestFormData({
          first_name: '', last_name: '', email: '', phone: '', student_id: '',
          program: '', year_of_study: '', career_interests: '', mentoring_goals: '',
          preferred_mentor_background: '', availability: '', additional_info: ''
        });
      }
    } catch (error) {
      setRequestMessage('Error: Failed to submit request.');
    }
    setTimeout(() => setRequestMessage(''), 5000);
  };

  const handleMentorChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setMentorFormData({ ...mentorFormData, [e.target.name]: e.target.value });
  };

  const handleRequestChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setRequestFormData({ ...requestFormData, [e.target.name]: e.target.value });
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
            {loading ? (
              <div style={{ textAlign: 'center', padding: '50px' }}>Loading alumni...</div>
            ) : displayAlumni.length > 0 ? (
              displayAlumni.map((member, index) => (
                <div key={member.id} className="alumni-card">
                  <div className="alumni-image">
                    <img 
                      src={member.photo ? 
                        `http://localhost:8000${member.photo}` : 
                        '/assets/images/default-avatar.jpg'
                      } 
                      alt={`${member.first_name} ${member.last_name}`} 
                    />
                  </div>
                  <div className="alumni-content">
                    <h3>{member.first_name} {member.last_name}</h3>
                    <p className="alumni-title">{member.current_position} at {member.company}</p>
                    <p className="alumni-graduation">Class of {member.graduation_year} | {member.program}</p>
                    <p className="alumni-description">{member.bio}</p>
                    {member.linkedin && (
                      <div className="alumni-social">
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div style={{ textAlign: 'center', padding: '50px' }}>
                <p>No alumni profiles available. Add alumni through the admin panel.</p>
              </div>
            )}
            

          </div>
        </div>
      </section>

      {/* Where Are They Now Map */}
      <section className="alumni-map-section">
        <div className="container">
          <h2 className="section-title">Where Are They Now</h2>
          <p className="section-description">Our alumni are making an impact across the globe in various sectors and industries</p>

          <div className="alumni-map">
            {/* Images removed */}
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
            <button onClick={() => setShowMentorForm(true)} className="btn">Become a Mentor</button>
            <button onClick={() => setShowRequestForm(true)} className="btn btn-outline">Request a Mentor</button>
          </div>
        </div>
      </section>

      {/* Mentor Application Form Modal */}
      {showMentorForm && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div style={{ background: 'white', borderRadius: '10px', padding: '30px', maxWidth: '600px', width: '100%', maxHeight: '90vh', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2>Become a Mentor</h2>
              <button onClick={() => setShowMentorForm(false)} style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' }}>×</button>
            </div>
            
            {mentorMessage && (
              <div style={{ color: mentorMessage.includes('Error') ? 'red' : 'green', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px', padding: '10px', background: mentorMessage.includes('Error') ? '#f8d7da' : '#d4edda', borderRadius: '5px' }}>
                {mentorMessage}
              </div>
            )}

            <form onSubmit={handleMentorSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                <input type="text" name="first_name" placeholder="First Name" value={mentorFormData.first_name} onChange={handleMentorChange} required style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }} />
                <input type="text" name="last_name" placeholder="Last Name" value={mentorFormData.last_name} onChange={handleMentorChange} required style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                <input type="email" name="email" placeholder="Email" value={mentorFormData.email} onChange={handleMentorChange} required style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }} />
                <input type="tel" name="phone" placeholder="Phone" value={mentorFormData.phone} onChange={handleMentorChange} required style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                <input type="number" name="graduation_year" placeholder="Graduation Year" value={mentorFormData.graduation_year} onChange={handleMentorChange} required style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }} />
                <select name="program" value={mentorFormData.program} onChange={handleMentorChange} required style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
                  <option value="">Select Program</option>
                  <option value="Software Engineering">Software Engineering</option>
                  <option value="Entrepreneurial Leadership">Entrepreneurial Leadership</option>
                  <option value="International Business & Trade">International Business & Trade</option>
                </select>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                <input type="text" name="current_position" placeholder="Current Position" value={mentorFormData.current_position} onChange={handleMentorChange} required style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }} />
                <input type="text" name="company" placeholder="Company" value={mentorFormData.company} onChange={handleMentorChange} required style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }} />
              </div>
              <input type="number" name="experience_years" placeholder="Years of Experience" value={mentorFormData.experience_years} onChange={handleMentorChange} required style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px', width: '100%', marginBottom: '15px' }} />
              <textarea name="expertise_areas" placeholder="Areas of Expertise" value={mentorFormData.expertise_areas} onChange={handleMentorChange} required rows={3} style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px', width: '100%', marginBottom: '15px', resize: 'vertical' }} />
              <textarea name="mentoring_experience" placeholder="Previous Mentoring Experience" value={mentorFormData.mentoring_experience} onChange={handleMentorChange} required rows={3} style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px', width: '100%', marginBottom: '15px', resize: 'vertical' }} />
              <input type="text" name="availability" placeholder="Availability (e.g., Weekends, Evenings)" value={mentorFormData.availability} onChange={handleMentorChange} required style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px', width: '100%', marginBottom: '15px' }} />
              <textarea name="motivation" placeholder="Why do you want to become a mentor?" value={mentorFormData.motivation} onChange={handleMentorChange} required rows={4} style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px', width: '100%', marginBottom: '20px', resize: 'vertical' }} />
              <button type="submit" className="btn" style={{ width: '100%' }}>Submit Application</button>
            </form>
          </div>
        </div>
      )}

      {/* Mentor Request Form Modal */}
      {showRequestForm && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div style={{ background: 'white', borderRadius: '10px', padding: '30px', maxWidth: '600px', width: '100%', maxHeight: '90vh', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2>Request a Mentor</h2>
              <button onClick={() => setShowRequestForm(false)} style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' }}>×</button>
            </div>
            
            {requestMessage && (
              <div style={{ color: requestMessage.includes('Error') ? 'red' : 'green', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px', padding: '10px', background: requestMessage.includes('Error') ? '#f8d7da' : '#d4edda', borderRadius: '5px' }}>
                {requestMessage}
              </div>
            )}

            <form onSubmit={handleRequestSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                <input type="text" name="first_name" placeholder="First Name" value={requestFormData.first_name} onChange={handleRequestChange} required style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }} />
                <input type="text" name="last_name" placeholder="Last Name" value={requestFormData.last_name} onChange={handleRequestChange} required style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                <input type="email" name="email" placeholder="Email" value={requestFormData.email} onChange={handleRequestChange} required style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }} />
                <input type="tel" name="phone" placeholder="Phone" value={requestFormData.phone} onChange={handleRequestChange} required style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                <input type="text" name="student_id" placeholder="Student ID" value={requestFormData.student_id} onChange={handleRequestChange} required style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }} />
                <select name="program" value={requestFormData.program} onChange={handleRequestChange} required style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
                  <option value="">Select Program</option>
                  <option value="Software Engineering">Software Engineering</option>
                  <option value="Entrepreneurial Leadership">Entrepreneurial Leadership</option>
                  <option value="International Business & Trade">International Business & Trade</option>
                </select>
              </div>
              <select name="year_of_study" value={requestFormData.year_of_study} onChange={handleRequestChange} required style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px', width: '100%', marginBottom: '15px' }}>
                <option value="">Select Year of Study</option>
                <option value="Year 1">Year 1</option>
                <option value="Year 2">Year 2</option>
                <option value="Year 3">Year 3</option>
                <option value="Year 4">Year 4</option>
              </select>
              <textarea name="career_interests" placeholder="Career Interests" value={requestFormData.career_interests} onChange={handleRequestChange} required rows={3} style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px', width: '100%', marginBottom: '15px', resize: 'vertical' }} />
              <textarea name="mentoring_goals" placeholder="What do you hope to achieve through mentoring?" value={requestFormData.mentoring_goals} onChange={handleRequestChange} required rows={3} style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px', width: '100%', marginBottom: '15px', resize: 'vertical' }} />
              <textarea name="preferred_mentor_background" placeholder="Preferred Mentor Background" value={requestFormData.preferred_mentor_background} onChange={handleRequestChange} required rows={3} style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px', width: '100%', marginBottom: '15px', resize: 'vertical' }} />
              <input type="text" name="availability" placeholder="Availability (e.g., Weekends, Evenings)" value={requestFormData.availability} onChange={handleRequestChange} required style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px', width: '100%', marginBottom: '15px' }} />
              <textarea name="additional_info" placeholder="Additional Information (Optional)" value={requestFormData.additional_info} onChange={handleRequestChange} rows={3} style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px', width: '100%', marginBottom: '20px', resize: 'vertical' }} />
              <button type="submit" className="btn" style={{ width: '100%' }}>Submit Request</button>
            </form>
          </div>
        </div>
      )}

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
            {connectMessage && (
              <div style={{ 
                color: connectMessage.includes('Error') ? 'red' : 'green', 
                fontWeight: 'bold', 
                textAlign: 'center', 
                marginBottom: '15px',
                padding: '10px',
                background: connectMessage.includes('Error') ? '#f8d7da' : '#d4edda',
                border: `1px solid ${connectMessage.includes('Error') ? '#f5c6cb' : '#c3e6cb'}`,
                borderRadius: '5px'
              }}>
                {connectMessage}
              </div>
            )}
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
