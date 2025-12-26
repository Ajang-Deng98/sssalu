import React, { useState, useEffect } from 'react';

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  category: string;
  event_date: string;
  is_featured: boolean;
  is_video: boolean;
  video_url: string;
  image: string;
  uploaded_at: string;
}

const Gallery: React.FC = () => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGalleryItems();
  }, []);

  const fetchGalleryItems = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/gallery/');
      const data = await response.json();
      console.log('Gallery API response:', data); // Debug log
      if (data.status === 'success' && data.gallery) {
        setGalleryItems(data.gallery);
      } else if (Array.isArray(data)) {
        // Handle direct array response
        setGalleryItems(data);
      }
    } catch (error) {
      console.error('Error fetching gallery items:', error);
    } finally {
      setLoading(false);
    }
  };

  const fallbackImages = [
    { title: "Cultural Night 2023", image: "/assets/images/event1.jpg", description: "Students in traditional attire performing" },
    { title: "Academic Workshop", image: "/assets/images/event4.jpg", description: "Students engaged in learning session" },
    { title: "Community Outreach", image: "/assets/images/event5.jpg", description: "Members volunteering in community" },
    { title: "Leadership Summit", image: "/assets/images/event6.jpg", description: "Leadership training and discussions" },
    { title: "Alumni Reunion", image: "/assets/images/event7.jpg", description: "Graduates reconnecting and networking" },
    { title: "Sports Tournament", image: "/assets/images/event8.jpg", description: "Athletic competition and team spirit" },
    { title: "Networking Event", image: "/assets/images/gal10.jpg", description: "Professional connections and conversations" },
    { title: "Award Ceremony", image: "/assets/images/gal11.jpg", description: "Recognition and achievement celebration" },
    { title: "Social Gathering", image: "/assets/images/gal12.jpg", description: "Members socializing and bonding" },
    { title: "Social Event Gathering", image: "/assets/images/newgal1.jpg", description: "Group photo at social event" },
    { title: "Ikaze day Gathering", image: "/assets/images/newgal2.jpg", description: "Special cultural day celebration" },
    { title: "Farewell Gathering for september 2023 intake", image: "/assets/images/newgal3.jpg", description: "Goodbye celebration for graduating class" }
  ];
  return (
    <div>
      <section style={{
        height: '70vh',
        minHeight: '600px',
        background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/assets/images/gal_backgrounddone.jpg")',
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

      <section className="gallery-section" style={{ paddingBottom: '120px' }}>
        <div className="container">
          <h2 className="section-title">Our Photo Gallery</h2>
          <p className="section-description">Browse through our collection of photos from events, activities, and special moments</p>

          <div className="gallery-grid">
            {loading ? (
              <div style={{ textAlign: 'center', padding: '50px' }}>Loading gallery...</div>
            ) : (
              (galleryItems.length > 0 ? galleryItems : fallbackImages).map((item, index) => (
                <div key={galleryItems.length > 0 ? item.id : index} className="gallery-item">
                  <img 
                    src={galleryItems.length > 0 ? `http://localhost:8000${item.image}` : item.image} 
                    alt={item.title} 
                  />
                  <div className="gallery-overlay">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    {galleryItems.length > 0 && item.event_date && (
                      <small>{item.event_date}</small>
                    )}
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