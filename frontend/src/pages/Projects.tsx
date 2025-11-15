import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { allImages } from '../utils/imageSlider.ts';

const Projects: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % allImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const sampleProjects = [
    {
      title: "Education Support Initiative",
      description: "Providing educational resources and support to underprivileged students in South Sudan through scholarships and learning materials.",
      image: "/assets/images/event1.jpg",
      startDate: "Jan 2023",
      impact: "50+ students supported"
    },
    {
      title: "Community Health Program",
      description: "Health awareness campaigns and basic healthcare services for rural communities in South Sudan.",
      image: "/assets/images/event2.jpg",
      startDate: "Mar 2023",
      impact: "200+ people reached"
    },
    {
      title: "Youth Leadership Development",
      description: "Training programs focused on developing leadership skills among young South Sudanese students.",
      image: "/assets/images/event3.jpg",
      startDate: "Feb 2023",
      impact: "30+ leaders trained"
    }
  ];

  const leadershipProjects = [
    {
      title: "Mentorship Program",
      description: "Connecting current students with alumni and professionals for career guidance and personal development.",
      image: "/assets/images/event4.jpg",
      startDate: "Sep 2022",
      impact: "25+ mentorship pairs"
    },
    {
      title: "Academic Excellence Initiative",
      description: "Study groups, tutoring sessions, and academic workshops to support student success at ALU.",
      image: "/assets/images/event5.jpg",
      startDate: "Aug 2022",
      impact: "100+ students helped"
    }
  ];

  const innovationProjects = [
    {
      title: "Tech for Good Challenge",
      description: "Annual competition encouraging students to develop technology solutions for South Sudan's challenges.",
      image: "/assets/images/event6.jpg",
      startDate: "Nov 2022",
      impact: "15+ innovative solutions"
    },
    {
      title: "Entrepreneurship Incubator",
      description: "Supporting student entrepreneurs with resources, mentorship, and funding opportunities.",
      image: "/assets/images/event7.jpg",
      startDate: "Jan 2023",
      impact: "8+ startups launched"
    }
  ];

  const partnershipProjects = [
    {
      title: "ALU Collaboration",
      description: "Joint initiatives with African Leadership University to enhance student experience and opportunities.",
      image: "/assets/images/event8.jpg",
      startDate: "Sep 2021",
      impact: "University-wide impact"
    }
  ];

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
          <h1>Projects & Initiatives</h1>
          <p>Discover our community outreach programs, leadership initiatives, and collaborative projects</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="projects-intro">
        <div className="container">
          <div className="intro-content">
            <h2 className="section-title">Making a Difference</h2>
            <p>At the South Sudanese Student Association, we believe in the power of collective action to create positive change. Our projects and initiatives focus on addressing challenges facing our community, developing leadership skills among our members, and fostering innovation and entrepreneurship.</p>
            <p>Through these efforts, we aim to contribute to the development of South Sudan while creating meaningful opportunities for our members to grow personally and professionally.</p>
          </div>
        </div>
      </section>

      {/* Community Outreach Programs */}
      <section className="projects-section outreach">
        <div className="container">
          <h2 className="section-title">Community Outreach Programs</h2>
          <p className="section-description">Our community outreach programs aim to support vulnerable populations and contribute to social development both locally and in South Sudan.</p>

          <div className="projects-grid">
            {sampleProjects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-details">
                    <div className="detail">
                      <i className="fas fa-calendar-alt"></i>
                      <span>Started: {project.startDate}</span>
                    </div>
                    <div className="detail">
                      <i className="fas fa-users"></i>
                      <span>{project.impact}</span>
                    </div>
                  </div>
                  <a href="#" className="btn btn-small">Learn More</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Academic Initiatives */}
      <section className="projects-section leadership">
        <div className="container">
          <h2 className="section-title">Leadership & Academic Initiatives</h2>
          <p className="section-description">Our leadership and academic initiatives focus on developing the skills and knowledge needed for our members to become effective leaders and change-makers.</p>

          <div className="projects-grid">
            {leadershipProjects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-details">
                    <div className="detail">
                      <i className="fas fa-calendar-alt"></i>
                      <span>Started: {project.startDate}</span>
                    </div>
                    <div className="detail">
                      <i className="fas fa-users"></i>
                      <span>{project.impact}</span>
                    </div>
                  </div>
                  <a href="#" className="btn btn-small">Learn More</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation & Entrepreneurship */}
      <section className="projects-section innovation">
        <div className="container">
          <h2 className="section-title">Innovation & Entrepreneurship</h2>
          <p className="section-description">Our innovation and entrepreneurship initiatives aim to foster creative thinking and support members in developing solutions to challenges facing South Sudan.</p>

          <div className="projects-grid">
            {innovationProjects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-details">
                    <div className="detail">
                      <i className="fas fa-calendar-alt"></i>
                      <span>Started: {project.startDate}</span>
                    </div>
                    <div className="detail">
                      <i className="fas fa-users"></i>
                      <span>{project.impact}</span>
                    </div>
                  </div>
                  <a href="#" className="btn btn-small">Learn More</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships & Collaborations */}
      <section className="projects-section partnerships">
        <div className="container">
          <h2 className="section-title">Partnerships & Collaborations</h2>
          <p className="section-description">We collaborate with various organizations to expand our impact and create more opportunities for our members.</p>

          <div className="projects-grid">
            {partnershipProjects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-details">
                    <div className="detail">
                      <i className="fas fa-calendar-alt"></i>
                      <span>Started: {project.startDate}</span>
                    </div>
                    <div className="detail">
                      <i className="fas fa-users"></i>
                      <span>{project.impact}</span>
                    </div>
                  </div>
                  <a href="#" className="btn btn-small">Learn More</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="get-involved">
        <div className="container">
          <h2 className="section-title">Get Involved</h2>
          <p className="section-description">There are many ways to contribute to our projects and initiatives. Whether you want to volunteer your time, share your expertise, or provide financial support, your contribution can make a difference.</p>

          <div className="involvement-options">
            <div className="involvement-card">
              <div className="involvement-icon">
                <i className="fas fa-hands-helping"></i>
              </div>
              <h3>Volunteer</h3>
              <p>Join our volunteer team and contribute your time and skills to our various projects and events.</p>
              <Link to="/contact" className="btn btn-small">Contact Us</Link>
            </div>

            <div className="involvement-card">
              <div className="involvement-icon">
                <i className="fas fa-chalkboard-teacher"></i>
              </div>
              <h3>Become a Mentor</h3>
              <p>Share your knowledge and experience by becoming a mentor in our mentorship program.</p>
              <Link to="/contact" className="btn btn-small">Contact Us</Link>
            </div>

            <div className="involvement-card">
              <div className="involvement-icon">
                <i className="fas fa-hand-holding-usd"></i>
              </div>
              <h3>Donate</h3>
              <p>Support our initiatives financially to help us expand our impact and reach more people.</p>
              <Link to="/contact" className="btn btn-small">Contact Us</Link>
            </div>

            <div className="involvement-card">
              <div className="involvement-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3>Partner With Us</h3>
              <p>Explore partnership opportunities for organizations interested in collaborating with SSSALU.</p>
              <Link to="/contact" className="btn btn-small">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;