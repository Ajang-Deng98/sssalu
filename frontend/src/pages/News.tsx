import React, { useState } from 'react';

const NewsPage: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribed:', email);
    setEmail('');
  };

  const featuredPost = { title: 'New Leadership Elected', content: 'We are excited to announce our new leadership team for the 2024 academic year.', created_at: '2024-01-15' };
  const recentNews = [];

  return (
    <div>
      {/* Page Banner */}
      <section style={{
        height: '40vh',
        minHeight: '300px',
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
      {featuredPost && (
        <section className="featured-post">
          <div className="container">
            <div className="featured-post-card">
              <div className="featured-post-image">
                <img src="/assets/images/featured-post.jpg" alt={featuredPost.title} />
                <div className="post-category">Featured</div>
              </div>
              <div className="featured-post-content">
                <div className="post-meta">
                  <p><i className="fas fa-calendar-alt"></i> {new Date(featuredPost.created_at).toLocaleDateString()}</p>
                  <p><i className="fas fa-user"></i> SSSALU Team</p>
                </div>
                <h2>{featuredPost.title}</h2>
                <p>{featuredPost.content.substring(0, 200)}...</p>
                <a href="#" className="btn">Read Full Article</a>
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
            {recentNews.length > 0 ? (
              recentNews.map((article, index) => (
                <div key={index} className="blog-card">
                  <div className="blog-image">
                    <img src={`/assets/images/news${(index % 2) + 1}.jpg`} alt={article.title} />
                    <div className="post-category">News</div>
                  </div>
                  <div className="blog-content">
                    <div className="post-meta">
                      <p><i className="fas fa-calendar-alt"></i> {new Date(article.created_at).toLocaleDateString()}</p>
                    </div>
                    <h3>{article.title}</h3>
                    <p>{article.content.substring(0, 120)}...</p>
                    <a href="#" className="read-more">
                      Read More <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              ))
            ) : (
              [1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="blog-card">
                  <div className="blog-image">
                    <img src={`/assets/images/news${(item % 2) === 0 ? '1' : '11'}.jpg`} alt={`News ${item}`} />
                    <div className="post-category">News</div>
                  </div>
                  <div className="blog-content">
                    <div className="post-meta">
                      <p><i className="fas fa-calendar-alt"></i> {new Date().toLocaleDateString()}</p>
                    </div>
                    <h3>Sample News Article {item}</h3>
                    <p>This is a sample news article showcasing the layout and design of our news section. Stay tuned for real updates!</p>
                    <a href="#" className="read-more">
                      Read More <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="blog-section blog-posts">
        <div className="container">
          <h2 className="section-title">Blog Posts</h2>
          <p className="section-description">Insights, stories, and perspectives from our community members</p>

          <div className="blog-grid">
            {[
              {
                title: "My Journey at ALU: A South Sudanese Perspective",
                content: "Reflecting on the transformative experience of studying at African Leadership University and the role of community in personal growth.",
                author: "John Deng",
                date: "Dec 15, 2023",
                category: "Student Life"
              },
              {
                title: "Building Bridges: The Importance of Cultural Exchange",
                content: "How cultural events and exchanges help build understanding and unity among diverse student populations at ALU.",
                author: "Mary Ayen",
                date: "Dec 10, 2023",
                category: "Culture"
              },
              {
                title: "Leadership Lessons from South Sudan",
                content: "Traditional leadership principles from South Sudan that can inform modern leadership practices in academic and professional settings.",
                author: "Peter Garang",
                date: "Dec 5, 2023",
                category: "Leadership"
              }
            ].map((post, index) => (
              <div key={index} className="blog-card">
                <div className="blog-image">
                  <img src={`/assets/images/news${(index % 2) === 0 ? '1' : '11'}.jpg`} alt={post.title} />
                  <div className="post-category">{post.category}</div>
                </div>
                <div className="blog-content">
                  <div className="post-meta">
                    <p><i className="fas fa-calendar-alt"></i> {post.date}</p>
                    <p><i className="fas fa-user"></i> {post.author}</p>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.content}</p>
                  <a href="#" className="read-more">
                    Read More <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            ))}
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
