import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface NewsItem {
  id: number;
  title: string;
  content: string;
  category: string;
  author_name: string;
  excerpt: string;
  image: string;
  is_featured: boolean;
  created_at: string;
}

const NewsPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [featuredNews, setFeaturedNews] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/news/');
      const data = await response.json();
      if (Array.isArray(data)) {
        const featured = data.find(item => item.is_featured);
        setFeaturedNews(featured || null);
        setNewsItems(data.filter(item => !item.is_featured));
      }
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubscribe = async (e: React.FormEvent) => {
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
      setMessage(result.message);
      
      if (result.status === 'success' || result.status === 'info') {
        setEmail('');
      }
    } catch (error) {
      setMessage('Error: Failed to subscribe. Please try again.');
    }
    setTimeout(() => setMessage(''), 5000);
  };

  const displayFeatured = featuredNews;
  const displayNews = newsItems;

  return (
    <div>
      {/* Page Banner */}
      <section style={{
        height: '60vh',
        minHeight: '600px',
        background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/assets/images/hero_homepage_2.jpg")',
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
          <h1 style={{ fontSize: '3rem', marginBottom: '15px', fontWeight: '700' }}>News & Blog</h1>
          <p style={{ fontSize: '1.2rem' }}>Stay updated with the latest news, stories, and insights from our community</p>
        </div>
      </section>

      {/* Featured Post */}
      {displayFeatured && (
        <section className="featured-post">
          <div className="container">
            <div className="featured-post-card">
              {featuredNews?.image && (
                <div className="featured-post-image">
                  <img 
                    src={`http://localhost:8000${featuredNews.image}`} 
                    alt={displayFeatured.title} 
                  />
                  <div className="post-category">Featured</div>
                </div>
              )}
              <div className="featured-post-content">
                <div className="post-meta">
                  <p><i className="fas fa-calendar-alt"></i> {new Date(displayFeatured.created_at).toLocaleDateString()}</p>
                  <p><i className="fas fa-user"></i> {featuredNews?.author_name || 'SSSALU Team'}</p>
                </div>
                <h2>{displayFeatured.title}</h2>
                <p>{displayFeatured.content.substring(0, 200)}...</p>
                <Link to={`/news/${displayFeatured.id}`} className="btn">Read Full Article</Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Recent News */}
      <section className="blog-section recent-news">
        <div className="container">
          <h2 className="section-title">Recent News</h2>
          <p className="section-description">Latest updates and announcements from the South Sudanese Student Association</p>

          <div className="blog-grid">
            {loading ? (
              <div style={{ textAlign: 'center', padding: '50px' }}>Loading news...</div>
            ) : displayNews.length > 0 ? (
              displayNews.map((article, index) => (
                <div key={article.id} className="blog-card">
                  {article.image && (
                    <div className="blog-image">
                      <img 
                        src={`http://localhost:8000${article.image}`} 
                        alt={article.title} 
                      />
                      <div className="post-category">{article.category}</div>
                    </div>
                  )}
                  <div className="blog-content">
                    <div className="post-meta">
                      <p><i className="fas fa-calendar-alt"></i> {new Date(article.created_at).toLocaleDateString()}</p>
                    </div>
                    <h3>{article.title}</h3>
                    <p>{article.content.substring(0, 120)}...</p>
                    <Link to={`/news/${article.id}`} className="read-more">
                      Read More <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div style={{ textAlign: 'center', padding: '50px' }}>
                <p>No news articles available. Add news through the admin panel.</p>
              </div>
            )}
          </div>
        </div>
      </section>



      {/* Newsletter Subscription */}
      <section className="subscribe-section">
        <div className="container">
          <div className="subscribe-content">
            <h2>Stay Updated</h2>
            <p>Subscribe to our newsletter to receive the latest news, event updates, and stories from the SSSALU community directly in your inbox.</p>
            
            <form className="subscribe-form" onSubmit={handleSubscribe}>
              {message && (
                <div style={{ 
                  color: message.includes('Error') ? 'red' : 'green', 
                  fontWeight: 'bold', 
                  textAlign: 'center', 
                  marginBottom: '15px',
                  padding: '10px',
                  background: message.includes('Error') ? '#f8d7da' : '#d4edda',
                  border: `1px solid ${message.includes('Error') ? '#f5c6cb' : '#c3e6cb'}`,
                  borderRadius: '5px'
                }}>
                  {message}
                </div>
              )}
              <input 
                type="email" 
                placeholder="Enter your email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
              <button type="submit" className="btn">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
