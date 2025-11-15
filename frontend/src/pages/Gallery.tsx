import React, { useState, useEffect } from 'react';
import { allImages } from '../utils/imageSlider.ts';
import { api } from '../services/api.ts';

interface GalleryImage {
  id: number;
  title: string;
  image: string;
  description: string;
  created_at: string;
}

const Gallery: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % allImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    api.getGallery().then(setGalleryImages).catch(console.error);
  }, []);

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
          <h1>Gallery</h1>
          <p>Explore our collection of memories, events, and moments</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="container">
          <h2 className="section-title">Our Photo Gallery</h2>
          <p className="section-description">Browse through our collection of photos from events, activities, and special moments</p>

          <div className="gallery-grid">
            {galleryImages.length > 0 ? (
              galleryImages.map((item, index) => (
                <div key={index} className="gallery-item">
                  <img src={`http://127.0.0.1:8000${item.image}`} alt={item.title} />
                  <div className="gallery-overlay">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))
            ) : (
              [
                { title: "Cultural Night 2023", image: "/assets/images/event1.jpg", description: "Celebrating South Sudanese culture" },
                { title: "Academic Workshop", image: "/assets/images/event2.jpg", description: "Skills development session" },
                { title: "Community Outreach", image: "/assets/images/event3.jpg", description: "Giving back to the community" },
                { title: "Leadership Summit", image: "/assets/images/event4.jpg", description: "Developing future leaders" },
                { title: "Alumni Reunion", image: "/assets/images/event5.jpg", description: "Connecting with graduates" },
                { title: "Sports Tournament", image: "/assets/images/event6.jpg", description: "Friendly competition" },
                { title: "Cultural Festival", image: "/assets/images/event7.jpg", description: "Traditional celebrations" },
                { title: "Graduation Ceremony", image: "/assets/images/event8.jpg", description: "Celebrating achievements" }
              ].map((item, index) => (
                <div key={index} className="gallery-item">
                  <img src={item.image} alt={item.title} />
                  <div className="gallery-overlay">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;