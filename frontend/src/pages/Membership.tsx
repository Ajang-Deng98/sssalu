import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { allImages } from '../utils/imageSlider.ts';

const Membership: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    alu_id: '',
    program: '',
    year_of_study: '',
    interests: [] as string[],
    skills: [] as string[],
    previous_experience: '',
    motivation: ''
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % allImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Membership application submitted:', formData);
    // Reset form
    setFormData({
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      alu_id: '',
      program: '',
      year_of_study: '',
      interests: [],
      skills: [],
      previous_experience: '',
      motivation: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'interests' | 'skills') => {
    const value = e.target.value;
    const currentArray = formData[field];
    
    if (e.target.checked) {
      setFormData({
        ...formData,
        [field]: [...currentArray, value]
      });
    } else {
      setFormData({
        ...formData,
        [field]: currentArray.filter(item => item !== value)
      });
    }
  };

  return (
    <div>
      {/* Page Banner */}
      <section className="page-banner">
        {allImages.map((image, index) => (
          <div 
            key={index}
            className={`page-banner-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("${image}")` }}
          />
        ))}
        <div className="banner-content">
          <h1>Membership</h1>
          <p>Join our vibrant community of South Sudanese students at ALU</p>
        </div>
      </section>

      {/* Membership Introduction */}
      <section className="membership-intro">
        <div className="container">
          <div className="intro-content">
            <h2 className="section-title">Why Join SSSALU?</h2>
            <p>The South Sudanese Student Association at African Leadership University is more than just a student organization – it's a family, a support system, and a platform for growth and impact.</p>
            <p>By becoming a member, you join a community of like-minded individuals who are passionate about their heritage, committed to academic excellence, and dedicated to making a positive difference in South Sudan and beyond.</p>
          </div>
        </div>
      </section>

      {/* How to Join Steps */}
      <section className="membership-section how-to-join">
        <div className="container">
          <h2 className="section-title">How to Join</h2>
          <p className="section-description">Becoming a member of SSSALU is simple and straightforward. Follow these easy steps to join our community.</p>

          <div className="steps-container">
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Fill Out the Application</h3>
                <p>Complete the membership application form below with your personal information, academic details, and interests.</p>
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Submit Your Application</h3>
                <p>Review your information and submit your application. You'll receive a confirmation email within 24 hours.</p>
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Attend Orientation</h3>
                <p>Join our new member orientation session to learn about SSSALU, meet other members, and get involved in activities.</p>
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Start Participating</h3>
                <p>Begin participating in events, projects, and initiatives. Your journey as an active SSSALU member starts here!</p>
              </div>
            </div>
          </div>

          <div className="cta-button">
            <a href="#membership-form" className="btn">Apply Now</a>
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="membership-section benefits">
        <div className="container">
          <h2 className="section-title">Membership Benefits</h2>
          <p className="section-description">As a member of SSSALU, you'll have access to a wide range of benefits and opportunities designed to support your personal and professional growth.</p>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Community & Networking</h3>
              <p>Connect with fellow South Sudanese students, alumni, and professionals to build lasting relationships and expand your network.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>Academic Support</h3>
              <p>Access tutoring, study groups, and academic resources to help you excel in your studies at ALU.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <h3>Career Development</h3>
              <p>Participate in workshops, mentorship programs, and career fairs to prepare for your professional journey.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-globe-africa"></i>
              </div>
              <h3>Cultural Preservation</h3>
              <p>Celebrate and preserve South Sudanese culture through events, traditions, and cultural exchange programs.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-hands-helping"></i>
              </div>
              <h3>Leadership Opportunities</h3>
              <p>Take on leadership roles in projects, events, and initiatives to develop your leadership skills and make an impact.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Community Service</h3>
              <p>Participate in community outreach programs and give back to communities in South Sudan and Rwanda.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Member Testimonials */}
      <section className="membership-section testimonials">
        <div className="container">
          <h2 className="section-title">What Our Members Say</h2>
          <p className="section-description">Hear from current and former members about their experiences with SSSALU</p>

          <div className="testimonials-slider">
            <div className="testimonial">
              <div className="testimonial-image">
                <img src="/assets/images/leader1.jpg" alt="John Deng" />
              </div>
              <div className="testimonial-content">
                <p>"Joining SSSALU was one of the best decisions I made at ALU. The community support, networking opportunities, and leadership development have been invaluable to my personal and professional growth."</p>
                <div className="testimonial-author">
                  <h4>John Deng</h4>
                  <p>Software Engineering, Class of 2024</p>
                </div>
              </div>
            </div>

            <div className="testimonial">
              <div className="testimonial-image">
                <img src="/assets/images/leader2.jpg" alt="Mary Ayen" />
              </div>
              <div className="testimonial-content">
                <p>"SSSALU provided me with a home away from home. The cultural events helped me stay connected to my roots while the academic support helped me excel in my studies."</p>
                <div className="testimonial-author">
                  <h4>Mary Ayen</h4>
                  <p>Entrepreneurial Leadership, Class of 2023</p>
                </div>
              </div>
            </div>

            <div className="testimonial">
              <div className="testimonial-image">
                <img src="/assets/images/leader3.jpg" alt="Peter Garang" />
              </div>
              <div className="testimonial-content">
                <p>"The leadership opportunities I had through SSSALU prepared me for my current role. The mentorship and guidance from alumni were particularly valuable."</p>
                <div className="testimonial-author">
                  <h4>Peter Garang</h4>
                  <p>Global Challenges, Class of 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Application Form */}
      <section id="membership-form" className="membership-section application">
        <div className="container">
          <h2 className="section-title">Membership Application</h2>
          <p className="section-description">Complete the form below to apply for SSSALU membership</p>

          <form className="membership-form" onSubmit={handleSubmit}>
            <div className="form-section">
              <h3>Personal Information</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="first_name">First Name</label>
                  <input 
                    type="text" 
                    id="first_name" 
                    name="first_name" 
                    value={formData.first_name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="last_name">Last Name</label>
                  <input 
                    type="text" 
                    id="last_name" 
                    name="last_name" 
                    value={formData.last_name}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
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
            </div>

            <div className="form-section">
              <h3>Academic Information</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="alu_id">ALU ID Number</label>
                  <input 
                    type="text" 
                    id="alu_id" 
                    name="alu_id" 
                    value={formData.alu_id}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="program">Program of Study</label>
                  <select 
                    id="program" 
                    name="program" 
                    value={formData.program}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select your program</option>
                    <option value="Software Engineering">Software Engineering</option>
                    <option value="Entrepreneurial Leadership">Entrepreneurial Leadership</option>
                    <option value="Global Challenges">Global Challenges</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="year_of_study">Year of Study</label>
                <select 
                  id="year_of_study" 
                  name="year_of_study" 
                  value={formData.year_of_study}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select your year</option>
                  <option value="1">First Year</option>
                  <option value="2">Second Year</option>
                  <option value="3">Third Year</option>
                  <option value="4">Fourth Year</option>
                  <option value="Graduate">Graduate Student</option>
                </select>
              </div>
            </div>

            <div className="form-section">
              <h3>Interests & Skills</h3>
              <div className="form-group">
                <label>Areas of Interest (Select all that apply)</label>
                <div className="checkbox-group">
                  {['Leadership Development', 'Community Service', 'Cultural Events', 'Academic Support', 'Entrepreneurship', 'Technology', 'Sports & Recreation', 'Arts & Culture'].map((interest) => (
                    <div key={interest} className="checkbox-item">
                      <input 
                        type="checkbox" 
                        id={interest} 
                        value={interest}
                        onChange={(e) => handleCheckboxChange(e, 'interests')}
                      />
                      <label htmlFor={interest}>{interest}</label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label>Skills & Talents (Select all that apply)</label>
                <div className="checkbox-group">
                  {['Public Speaking', 'Event Planning', 'Graphic Design', 'Writing', 'Photography', 'Social Media', 'Project Management', 'Fundraising'].map((skill) => (
                    <div key={skill} className="checkbox-item">
                      <input 
                        type="checkbox" 
                        id={skill} 
                        value={skill}
                        onChange={(e) => handleCheckboxChange(e, 'skills')}
                      />
                      <label htmlFor={skill}>{skill}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="form-section">
              <h3>Additional Information</h3>
              <div className="form-group">
                <label htmlFor="previous_experience">Previous Leadership or Volunteer Experience</label>
                <textarea 
                  id="previous_experience" 
                  name="previous_experience" 
                  rows={4}
                  value={formData.previous_experience}
                  onChange={handleChange}
                  placeholder="Describe any previous leadership roles, volunteer work, or relevant experience..."
                />
              </div>

              <div className="form-group">
                <label htmlFor="motivation">Why do you want to join SSSALU?</label>
                <textarea 
                  id="motivation" 
                  name="motivation" 
                  rows={4}
                  value={formData.motivation}
                  onChange={handleChange}
                  placeholder="Tell us about your motivation for joining and how you hope to contribute..."
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn">Submit Application</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Membership;